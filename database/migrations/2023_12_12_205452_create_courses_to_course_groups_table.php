<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses_to_course_groups', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_group_id');
            $table->unsignedBigInteger('course_id');
            $table->foreign('course_group_id')->references('id')->on('course_groups');
            $table->foreign('course_id')->references('id')->on('courses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses_to_course_groups');
    }
};
