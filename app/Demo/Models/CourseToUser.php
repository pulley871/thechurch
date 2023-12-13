<?php

declare(strict_types=1);

namespace App\Demo\Models;

use Illuminate\Database\Eloquent\Model;

class CourseToUser extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'courses_to_users';
}
