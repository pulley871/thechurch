<?php

namespace App\Listeners;

use App\Events\NeedViewed;
use App\Jobs\UpdateNeedViewCount;
use App\Mail\NeedViewed as NeedViewedMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateNeedViewedCount
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(NeedViewed $event): void
    {
//        $need_owner = $event->need->owner;
//        $mailable = new NeedViewedMail($need_owner);
//        \Mail::to($need_owner->email)->send($mailable);
//        UpdateNeedViewCount::dispatch($event->need, auth()->user());
        \Log::info('listener hit');
        dispatch(new UpdateNeedViewCount($event->need, auth()->user()));
    }
}
