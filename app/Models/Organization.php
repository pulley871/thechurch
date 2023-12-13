<?php

namespace App\Models;

use App\Traits\HasAdoptedNeeds;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property string $name
 * @property int $main_admin_id
 * @property string $phone_number
 * @property string $address_line_one
 * @property string $address_line_two
 * @property string $city
 * @property string $state
 * @property string $postal_code
 * @property string $country_code
 * @property string $email
 */
class Organization extends Model
{
    use HasAdoptedNeeds;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'main_admin_id'
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
