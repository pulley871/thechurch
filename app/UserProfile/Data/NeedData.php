<?php

declare(strict_types=1);

namespace App\UserProfile\Data;

use App\Models\Need;
use Spatie\LaravelData\Data;

class NeedData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $body
    ) {}

    public static function fromModel(Need $need): self
    {
        return new self(
            id: $need->id,
            title: $need->title,
            body: $need->body
        );
    }
}
