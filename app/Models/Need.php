<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property int $user_id
 * @property int $organization_id
 * @property int $category_id
 * @property string $title
 * @property string $body
 * @property int $priority
 * @property string $requested_deadline
 * @property bool $completed
 * @property bool $approved
 * @property \Date $completed_at
 * @property bool $user_contacted
 */
class Need extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = [
        'organization_id',
        'category_id',
        'title',
        'body',
        'priority',
        'requested_deadline',
        'completed',
        'approved',
        'completed_at',
        'user_contacted'
    ];

    public function category(): HasOne
    {
        return $this->hasOne(NeedCategory::class, 'id', 'category_id');
    }
}
