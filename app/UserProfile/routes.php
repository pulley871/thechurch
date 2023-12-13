<?php

use App\UserProfile\Http\Controllers\AcceptNeedController;
use App\UserProfile\Http\Controllers\AdoptedNeedsController;
use App\UserProfile\Http\Controllers\NeedInfoController;
use App\UserProfile\Http\Controllers\NeedsController;
use App\UserProfile\Http\Controllers\UpdateOrganizationController;

Route::post('update-organization', UpdateOrganizationController::class)
    ->name('profile.update-organization');
Route::get('needs', [NeedsController::class, 'show'])->name('profile.available-needs');
Route::get('need-info/{id}', [NeedInfoController::class, 'show'])->name('need-info');
Route::post('need-info/accept-need', AcceptNeedController::class)->name('accept-need');
Route::get('adopted-needs', [AdoptedNeedsController::class, 'show'])->name('adopted-needs');
