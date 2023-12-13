<?php

declare(strict_types=1);

namespace App\Demo\Controllers;

use App\Demo\Models\CourseGroup;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class  CatalogController extends Controller
{
    public function __invoke()
    {
//        dd(CourseGroup::query()->with('courses')->get());
        return Inertia::render('Demo/Catalog', ['courses' => CourseGroup::query()->with('courses')->get()]);
    }
}
