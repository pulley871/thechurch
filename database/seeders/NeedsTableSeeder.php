<?php

namespace Database\Seeders;

use App\Models\Need;
use Database\Factories\NeedFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NeedsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Need::factory(100000)->create();
    }
}
