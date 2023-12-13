<?php

declare(strict_types=1);

namespace App\Demo\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class CourseGroup extends Model
{
    protected $primaryKey = 'id';

    public function courses(): HasManyThrough
    {
        return $this->hasManyThrough(
            Course::class,
            CourseToCourseGroup::class,
            'course_group_id',
            'id',
            'id',
            'course_id'
        );
    }
}
