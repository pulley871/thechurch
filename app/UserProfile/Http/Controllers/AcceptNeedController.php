<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Controllers;

use App\Http\Controllers\Controller;
use App\UserProfile\Actions\AcceptNeedAction;
use App\UserProfile\Data\AcceptNeedData;

class AcceptNeedController extends Controller
{
    public function __invoke(AcceptNeedData $data, AcceptNeedAction $action)
    {
        $action->execute($data);
    }
}
