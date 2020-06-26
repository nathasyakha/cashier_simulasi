<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['invoice_id', 'paid_amount', 'due_amount', 'total_amount', 'discount_amount'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
}
