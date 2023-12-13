<?php

declare(strict_types=1);

namespace App\Traits;

use App\Models\Need;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

trait HasAdoptedNeeds
{
    public function notCompletedNeeds(): Collection
    {
        return Need::query()
            ->where('organization_id', $this->id)
            ->where('completed', false)
            ->get();
    }

    public function allAdoptedNeeds(): Collection
    {
        return Need::query()
            ->where('organization_id', $this->id)
            ->get();
    }

    public function completedAdoptedNeeds(): Collection
    {
        return Need::query()
            ->where('organization_id', $this->id)
            ->where('completed', true)
            ->get();
    }
}
