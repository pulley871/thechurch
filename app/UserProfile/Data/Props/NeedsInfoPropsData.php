<?php

declare(strict_types=1);

namespace App\UserProfile\Data\Props;

use App\UserProfile\Data\NeedData;
use Spatie\LaravelData\Data;

class NeedsInfoPropsData extends Data
{
    public function __construct(
        public NeedData $need
    ) {}
}
