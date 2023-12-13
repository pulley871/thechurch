<?php

declare(strict_types=1);

namespace App\Demo\Controllers;

use App\Demo\Models\Course;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function __invoke() {
        return Inertia::render('Demo/Course', ['course' => Course::find(1)]);
    }
}
