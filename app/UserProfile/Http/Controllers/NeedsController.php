<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Need;
use App\UserProfile\Data\NeedsColumnData;
use App\UserProfile\Data\NeedsRowData;
use App\UserProfile\Data\Props\NeedsShowPropData;
use Inertia\Inertia;

class NeedsController extends Controller
{
    public function show()
    {
        $columns = [
            [
                'accessorKey' => 'title',
                'header' => 'Title'
            ],
            [
                'accessorKey' => 'category',
                'header' => 'Category'
            ],
            [
                'accessorKey' => 'priority',
                'header' => 'Priority'
            ],
            [
                'accessorKey' => 'requested_deadline',
                'header' => 'Requested By'
            ],

        ];

        return Inertia::render(
            component: 'Needs/Needs',
            props: NeedsShowPropData::from(
                [
                    'columns' => NeedsColumnData::collection($columns),
                    'table_data' => NeedsRowData::collection(Need::all())
                ]
            ));
    }
}
