export interface OrganizationEdit {
    id: number
    name: string
    main_admin_id: number
    phone_number: string|null
    address_line_one: string|null
    address_line_two: string|null
    city: string|null
    state: string|null
    postal_code: string|null
    country_code: string|null
    email: string|null
}
