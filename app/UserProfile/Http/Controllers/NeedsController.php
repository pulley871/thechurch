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
                'header' => 'Title',
                'sortable' => false,
            ],
            [
                'accessorKey' => 'category',
                'header' => 'Category',
                'sortable' => true,
            ],
            [
                'accessorKey' => 'priority',
                'header' => 'Priority',
                'sortable' => true,
            ],
            [
                'accessorKey' => 'requested_deadline',
                'header' => 'Requested By',
                'sortable' => true,
            ],

        ];

        return Inertia::render(
            component: 'Needs/Needs',
            props: NeedsShowPropData::from(
                [
                    'columns' => NeedsColumnData::collection($columns),
                    'table_data' => NeedsRowData::collection(Need::where('organization_id', null)
                        ->where('organization_id', null)
                        ->where('requested_deadline', '>=', now())
                        ->orderBy('requested_deadline')
                        ->limit(1000)
                        ->get())
                ]
            ));
    }
}
