<?php

declare(strict_types=1);

namespace App\UserProfile\Data;

use App\Models\Need;
use Spatie\LaravelData\Data;

class NeedsRowData extends Data
{
    public function __construct(
        public int $id,
        public string $category,
        public string $title,
        public int $priority,
        public string $requested_deadline
    ) {
    }

    public static function fromModel(Need $need): self
    {
        return new self(
            id: $need->id,
            category: $need->category->name,
            title: $need->title,
            priority: $need->priority,
            requested_deadline: $need->requested_deadline,
        );
    }
}
