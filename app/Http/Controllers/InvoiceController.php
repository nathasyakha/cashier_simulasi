<?php

namespace App\Http\Controllers;

use App\Detail_Invoice;
use App\Ingredient;
use App\Invoice;
use App\Menu;
use App\Payment;
use App\Recipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\Facades\DataTables;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $invoice = DB::table('invoices')
            ->leftJoin('users', 'users.id', '=', 'invoices.user_id')
            ->leftJoin('detail__invoices', 'detail__invoices.invoice_id', '=', 'invoices.id')
            ->leftJoin('menus', 'menus.id', '=', 'detail__invoices.menu_id')
            ->leftJoin('payments', 'payments.invoice_id', '=', 'invoices.id')
            ->select(
                'invoices.*',
                'users.name',
                'detail__invoices.invoice_id',
                'detail__invoices.menu_id',
                'detail__invoices.quantity',
                'detail__invoices.price',
                'detail__invoices.subtotal',
                'menus.menu_name',
                'payments.paid_amount',
                'payments.due_amount',
                'payments.total_amount'
            )->where('user_id', '=', Auth::user()->id)->get();
        $menu = Menu::all();
        $user = Auth::user()->id;

        if (request()->ajax()) {
            return  DataTables::of($invoice)
                ->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $btn = '<a href="javascript:void(0)" data-toggle="tooltip"  data-id="' . $data->id . '" data-original-title="Edit" class="edit btn btn-info btn-sm editForm"><i class="far fa-edit"></i> Edit</a>';
                    $btn = $btn . ' <a href="javascript:void(0)" data-toggle="tooltip"  data-id="' . $data->id . '" data-original-title="Delete" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt"></i> Delete</a>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }

        return view('invoice.index', compact('invoice', 'menu'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $request->validate([
            'date' => 'required',
            'menu_id' => 'required|exists:menus,id',
            'quantity' => 'required',
            'price' => 'required',
            'subtotal' => 'required',
            'paid_amount' => 'required',
            'due_amount' => 'required',
            'total_amount' => 'required',
        ]);
        $invoice = new Invoice();

        $invoice->user_id = Auth::user()->id;
        $invoice->date = $request->date;

        DB::transaction(function () use ($request, $invoice) {
            if ($invoice->save()) {
                $count_menu = count($request->menu_id);
                for ($i = 0; $i < $count_menu; $i++) {
                    $detail_invoice = new Detail_Invoice();
                    $detail_invoice->invoice_id = $invoice->id;
                    $detail_invoice->menu_id = $request->menu_id[$i];
                    $detail_invoice->quantity = $request->quantity[$i];
                    $detail_invoice->price = $request->price[$i];
                    $detail_invoice->subtotal = $request->subtotal[$i];
                    $detail_invoice->save();
                }
                $payment = new Payment();
                $payment->invoice_id = $invoice->id;
                $payment->paid_amount = $request->paid_amount;
                $payment->due_amount = $request->due_amount;
                $payment->total_amount = $request->total_amount;
                $payment->save();
            }
        });
        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $invoice = Invoice::with(['detail', 'payment'])->find($id);

        return response()->json($invoice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        $request->validate([
            'date' => 'required',
            'menu_id' => 'required|exists:menus,id',
            'quantity' => 'required',
            'price' => 'required',
            'subtotal' => 'required',
            'paid_amount' => 'required',
            'due_amount' => 'required',
            'total_amount' => 'required',
        ]);
        $invoice = new Invoice();

        $invoice->user_id = Auth::user()->id;
        $invoice->date = $request->date;

        DB::transaction(function () use ($request, $invoice) {
            if ($invoice->update()) {
                $detail_invoice = new Detail_Invoice();
                $detail_invoice->invoice_id = $invoice->id;
                $detail_invoice->menu_id = $request->menu_id;
                $detail_invoice->quantity = $request->quantity;
                $detail_invoice->price = $request->price;
                $detail_invoice->subtotal = $request->subtotal;
                $detail_invoice->update();

                $payment = new Payment();
                $payment->invoice_id = $invoice->id;
                $payment->paid_amount = $request->paid_amount;
                $payment->due_amount = $request->due_amount;
                $payment->total_amount = $request->total_amount;
                $payment->update();
            }
        });
        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
    }

    public function getPrice(Request $request)
    {
        $menu_id = $request->menu_id;
        $price = Menu::where('id', $menu_id)->first()->price;

        return response()->json($price);
    }
}
