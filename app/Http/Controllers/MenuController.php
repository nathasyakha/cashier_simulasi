<?php

namespace App\Http\Controllers;

use App\Category;
use App\Ingredient;
use App\Menu;
use App\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\Facades\DataTables;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menu = DB::table('menus')
            ->leftJoin('categories', 'categories.id', '=', 'menus.category_id')
            ->select('menus.*', 'categories.category_name')
            ->get();

        $category = Category::all();

        $ingredient = Ingredient::all();

        if (request()->ajax()) {
            return  DataTables::of($menu)
                ->addIndexColumn()
                ->addColumn('action', function ($data) {
                    $btn = '<a href="javascript:void(0)" data-toggle="tooltip"  data-id="' . $data->id . '" data-original-title="Edit" class="edit btn btn-info btn-sm editForm"><i class="far fa-edit"></i> Edit</a>';
                    $btn = $btn . ' <a href="javascript:void(0)" data-toggle="tooltip"  data-id="' . $data->id . '" data-original-title="Delete" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt"></i> Delete</a>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        return view('menu.index', compact('menu', 'category', 'ingredient'));
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
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'menu_name' => 'required',
            'price' => 'required',
            'ingredient_id' => 'required',
            'qty' => 'required',
            'unit' => 'required',

        ]);

        $menu = $request->all();
        $last = Menu::create($menu)->id;
        if (count($request->ingredient_id) > 0) {
            foreach ($request->ingredient_id as $recipe => $v) {
                $data = array(
                    'menu_id' => $last,
                    'ingredient_id' => $request->ingredient_id[$recipe],
                    'qty' => $request->qty[$recipe],
                    'unit' => $request->unit[$recipe],
                );
                Recipe::insert($data);
            }
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $menu = Menu::find($id);

        return response()->json($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'menu_name' => 'required',
            'price' => 'required'
        ]);

        $menu = Menu::findOrFail($id);

        $menu['category_id'] = $request->category_id;
        $menu['menu_name'] = $request->menu_name;
        $menu['price'] = $request->price;

        $menu->update();

        return response()->json($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);

        $menu->delete();

        return response()->json($menu);
    }

    public function getUnit(Request $request)
    {
        $ing_id = $request->ingredient_id;
        $unit = Ingredient::where('id', $ing_id)->first()->unit;

        return response()->json($unit);
    }
}
