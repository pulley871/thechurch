<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Controllers;

use App\Http\Controllers\Controller;
use App\UserProfile\Data\NeedData;
use App\UserProfile\Data\Props\AdoptedNeedsIndexData;
use Inertia\Inertia;

class AdoptedNeedsController extends Controller
{
    public function show()
    {
        return Inertia::render(
            component: 'Needs/AdoptedNeeds',
            props: AdoptedNeedsIndexData::from([
                'needs' => NeedData::collection(auth()->user()->currentOrganization->notCompletedNeeds())
            ])
        );
    }
}
