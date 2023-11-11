<?php

declare(strict_types=1);

namespace App\UserProfile\Data;

use Spatie\LaravelData\Data;

class NeedsColumnData extends Data
{
    public function __construct(
        public string $accessorKey,
        public string $header
    ) {}
}
