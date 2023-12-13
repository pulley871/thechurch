<?php

namespace App\Jobs;

use App\Models\Need;
use App\Models\NeedView;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UpdateNeedViewCount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public readonly Need $need, public readonly User $user)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        \Log::info('job hit');
        if (!$this->user->organization_id) {
            \Log::info('org not found');

            return;
        }

        $need_viewed = NeedView::query()->where(
            [
                'organization_id' => $this->user->organization_id,
                'need_id' => $this->need->id
            ]
        )->exists();

        if ($need_viewed) {
            \Log::info('need exists');

            return;
        }

        $new_view = new NeedView();
        $new_view->organization_id = $this->user->organization_id;
        $new_view->need_id = $this->need->id;
        $new_view->save();
    }
}
