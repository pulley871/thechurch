<?php

declare(strict_types=1);

namespace App\Demo\Models;

use Illuminate\Database\Eloquent\Model;

class CourseToCourseGroup extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'courses_to_course_groups';
}
