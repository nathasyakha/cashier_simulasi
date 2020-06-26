<?php

namespace App\Http\Controllers;

use App\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ingredient = Ingredient::all();

        return view('ingredient.index', compact('ingredient'));
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
            'ing_name' => 'required',
            'stock' => 'required',
            'unit' => 'required'
        ]);

        $ingredient = Ingredient::create([
            'ing_name' => $request['ing_name'],
            'stock' => $request['ing_name'],
            'unit' => $request['unit']
        ]);

        return response()->json($ingredient);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function show(Ingredient $ingredient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ingredient = Ingredient::find($id);

        return response()->json($ingredient);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'ing_name' => 'required',
            'stock' => 'required',
            'unit' => 'required'
        ]);

        $ingredient = Ingredient::findOrFail($id);

        $ingredient['ing_name'] = $request->ing_name;
        $ingredient['stock'] = $request->stock;
        $ingredient['unit'] = $request->unit;

        $ingredient->update();

        return response()->json($ingredient);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ingredient  $ingredient
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ingredient = Ingredient::findOrFail($id);

        $ingredient->delete();

        return response()->json(['message' => true]);
    }
}
