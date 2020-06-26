<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail_Invoice extends Model
{
    protected $fillable = ['invoice_id', 'menu_id', 'quantity', 'price', 'subtotal'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function menu()
    {
        return $this->belongsTo(menu::class);
    }
}
