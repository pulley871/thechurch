<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 */
class NeedCategory extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
    ];
}
