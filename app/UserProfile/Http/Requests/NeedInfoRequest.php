<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Requests;

use App\Models\Need;
use Spatie\LaravelData\Attributes\FromRouteParameter;
use Spatie\LaravelData\Data;

class NeedInfoRequest extends Data
{
    public function __construct(
        #[FromRouteParameter('id')]
        public string $id,
        public ?Need $need,
    ) {
        $this->need = Need::findOrFail((int) $this->id);
    }
}
