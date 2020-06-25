<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = ['ing_name', 'stock', 'unit'];

    public function recipe()
    {
        return $this->hasMany(Recipe::class);
    }
}
