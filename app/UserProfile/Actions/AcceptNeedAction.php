<?php

declare(strict_types=1);

namespace App\UserProfile\Actions;

use App\Models\Need;
use App\UserProfile\Data\AcceptNeedData;

class AcceptNeedAction
{
    public function execute(AcceptNeedData $data): Need
    {
        $data->need->organization_id = $data->user->organization_id;
        $data->need->save();
        return $data->need;
    }
}
