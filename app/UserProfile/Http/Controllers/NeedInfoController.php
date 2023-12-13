<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Controllers;

use App\Events\NeedViewed;
use App\Http\Controllers\Controller;
use App\UserProfile\Data\NeedData;
use App\UserProfile\Data\Props\NeedsInfoPropsData;
use App\UserProfile\Http\Requests\NeedInfoRequest;
use Inertia\Inertia;

class NeedInfoController extends Controller
{
    public function show(NeedInfoRequest $request)
    {
        event(new NeedViewed($request->need));

        return Inertia::render(
            'Needs/NeedInfo',
            new NeedsInfoPropsData(
                need: NeedData::from($request->need)
            )
        );
    }
}
