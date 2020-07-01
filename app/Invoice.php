<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = ['user_id', 'date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function detail()
    {
        return $this->hasMany(Detail_Invoice::class);
    }

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }
}
