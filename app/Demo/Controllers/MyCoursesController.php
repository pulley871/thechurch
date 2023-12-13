<?php

declare(strict_types=1);

namespace App\Demo\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class MyCoursesController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Demo/MyCourses', [
            'courses' => auth()->user()->courses
        ]);
    }
}
