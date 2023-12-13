<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property int $user_id
 * @property int $organization_id
 * @property int $category_id
 * @property string $title
 * @property string $body
 * @property string $priority
 * @property string $requested_deadline
 * @property bool $completed
 * @property bool $approved
 * @property \Date $completed_at
 * @property bool $user_contacted
 */
class Need extends Model
{
    use HasFactory;
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

    protected $priorityMap = [
        1 => 'Lowest',
        2 => 'Low',
        3 => 'Medium-Low',
        4 => 'Medium',
        5 => 'Medium-High',
        6 => 'High',
        7 => 'Very High',
        8 => 'Critical',
        9 => 'Urgent',
        10 => 'Highest',
    ];


    public function getPriorityAttribute($value)
    {
        return $this->priorityMap[$value] ?? null;
    }

    public function category(): HasOne
    {
        return $this->hasOne(NeedCategory::class, 'id', 'category_id');
    }

    public function owner(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function viewTotal(): int
    {
        return $this->hasMany(NeedView::class, 'need_id', 'id')->count();
    }
}
