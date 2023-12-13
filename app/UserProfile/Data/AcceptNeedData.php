<?php

declare(strict_types=1);

namespace App\UserProfile\Data;

use App\Models\Need;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\LaravelData\Data;

class AcceptNeedData extends Data
{
    public function __construct(
        public int $need_id,
        public ?Need $need,
        public ?User $user
    ) {
    }

    public static function fromRequest(Request $request): self
    {
        return new self(
            need_id: $request->get('need_id'),
            need: Need::findOrFail($request->get('need_id')),
            user: auth()->user(),
        );
    }
}
