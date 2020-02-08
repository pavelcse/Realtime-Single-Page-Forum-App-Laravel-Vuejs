<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'slug'];
    protected $dates = ['created_at', 'updated_at'];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}