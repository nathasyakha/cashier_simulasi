<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail_Recipe extends Model
{
    protected $fillable = ['recipe_id', 'ingredient_id', 'qty', 'unit'];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
