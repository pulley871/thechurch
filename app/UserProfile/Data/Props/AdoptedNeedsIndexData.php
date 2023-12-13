<?php

declare(strict_types=1);

namespace App\UserProfile\Data\Props;

use App\UserProfile\Data\NeedData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class AdoptedNeedsIndexData extends Data
{
    public function __construct(
        #[DataCollectionOf(NeedData::class)]
        public DataCollection $needs
    ) {}
}
