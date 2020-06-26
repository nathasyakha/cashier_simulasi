<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['menu_id', 'desc'];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
