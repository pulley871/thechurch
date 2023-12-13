<?php

namespace App\Listeners;

use App\Events\NeedViewed;
use App\Mail\NeedViewed as NeedViewedMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNeedViewedEmail
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
    }
}
