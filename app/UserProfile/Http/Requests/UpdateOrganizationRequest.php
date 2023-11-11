<?php

declare(strict_types=1);

namespace App\UserProfile\Http\Requests;

use App\Models\Organization;
use Illuminate\Foundation\Http\FormRequest;

class UpdateOrganizationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'organization_id' => ['required', 'int'],
            'name' => ['required', 'string', 'max:100'],
            'email' => ['nullable', 'email'],
            'address_line_one' => ['required', 'string'],
            'address_line_two' => ['nullable', 'string'],
            'city' => ['required', 'string'],
            'state' => ['required', 'string'],
            'postal_code' => ['required', 'string'],
            'country_code' => ['required', 'string', 'max:3'],
            'phone' => ['nullable', 'string']
        ];
    }

    public function authorize(): bool
    {
        $organization = Organization::findOrFail($this->input('organization_id'));
        return $this->user()->can('edit', $organization);
    }
}
