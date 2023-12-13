<?php

namespace Database\Factories;

use App\Models\Need;
use App\Models\User;
use App\Models\NeedCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class NeedFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Need::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // Get user IDs with organization_id = null
        $userIds = User::where('organization_id', null)->pluck('id')->toArray();

        // Get valid category IDs
        $categoryIds = NeedCategory::pluck('id')->toArray();

        return [
            'user_id' => $this->faker->randomElement($userIds),
            'organization_id' => null,
            'category_id' => $this->faker->randomElement($categoryIds),
            'title' => $this->faker->realText(50),
            'body' => $this->faker->realText(200),
            'priority' => $this->faker->numberBetween(1, 10),
            'requested_deadline' => $this->faker->dateTimeBetween('+1 day', '+30 days'),
            'completed' => false,
            'approved' => false,
            'user_contacted' => false,
            'completed_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
