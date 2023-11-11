<?php

declare(strict_types=1);

namespace App\UserProfile\Data\Props;

use App\UserProfile\Data\NeedsColumnData;
use App\UserProfile\Data\NeedsRowData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class NeedsShowPropData extends Data
{
    public function __construct(
        #[DataCollectionOf(NeedsColumnData::class)]
        public DataCollection $columns,
        #[DataCollectionOf(NeedsRowData::class)]
        public DataCollection $table_data,
    ) {
    }
}
