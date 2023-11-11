<?php

namespace Database\Seeders;

use App\Models\NeedCategory;
use Illuminate\Database\Seeder;

class NeedCategoriesSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Food Assistance',
            'Shelter or Housing',
            'Financial Counseling',
            'Employment Assistance',
            'Healthcare Services',
            'Clothing and Personal Hygiene',
            'Educational Support',
            'Legal Aid or Advice',
            'Mental Health Counseling',
            'Addiction Recovery Support',
            'Transportation Assistance',
            'Childcare Services',
            'Utility Bill Assistance',
            'Home Repairs or Maintenance',
            'Senior Care and Support',
            'Spiritual Guidance or Prayer',
            'Domestic Violence Support',
            'Grief Counseling',
            'Community Outreach and Engagement',
            'Emergency Disaster Relief',
        ];

        foreach ($categories as $category) {
            NeedCategory::create(['name' => $category]);
        }
    }
}
