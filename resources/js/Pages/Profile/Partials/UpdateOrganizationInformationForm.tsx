import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import {OrganizationEdit} from "@/Interfaces/Organization/OrganizationEdit";

export default function UpdateOrganizationInformationForm({ organization, className = '' }: {organization: OrganizationEdit, className?: string }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        organization_id: organization.id,
        name: organization.name,
        phone_number: organization.phone_number ?? '',
        address_line_one: organization.address_line_one ?? '',
        address_line_two: organization.address_line_two ?? '',
        city: organization.city ?? '',
        state: organization.state ?? '',
        postal_code: organization.postal_code ?? '',
        country_code: organization.country_code ?? '',
        email: organization.email ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('profile.update-organization'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Organization Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update Your Organizations Information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="address_one" value="Address Line 1" />

                    <TextInput
                        id="address_one"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_line_one}
                        onChange={(e) => setData('address_line_two', e.target.value)}
                        required
                        autoComplete="address_line_one"
                    />

                    <InputError className="mt-2" message={errors.address_line_one} />
                </div>

                <div>
                    <InputLabel htmlFor="address_two" value="Address Line 2" />

                    <TextInput
                        id="address_two"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_line_two}
                        onChange={(e) => setData('address_line_two', e.target.value)}
                        autoComplete="address_line_two"
                    />

                    <InputError className="mt-2" message={errors.address_line_two} />
                </div>

                <div>
                    <InputLabel htmlFor="city" value="City" />

                    <TextInput
                        id="city"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.city}
                        onChange={(e) => setData('city', e.target.value)}
                        required
                        autoComplete="city"
                    />

                    <InputError className="mt-2" message={errors.city} />
                </div>

                <div>
                    <InputLabel htmlFor="state" value="State" />

                    <TextInput
                        id="state"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.state}
                        onChange={(e) => setData('state', e.target.value)}
                        required
                        autoComplete="state"
                    />

                    <InputError className="mt-2" message={errors.state} />
                </div>

                <div>
                    <InputLabel htmlFor="postal_code" value="Postal Code" />

                    <TextInput
                        id="postal_code"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.postal_code}
                        onChange={(e) => setData('postal_code', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.postal_code} />
                </div>

                <div>
                    <InputLabel htmlFor="country" value="Country" />

                    <TextInput
                        id="country"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.country_code}
                        onChange={(e) => setData('country_code', e.target.value)}
                        required
                        autoComplete="country_code"
                    />

                    <InputError className="mt-2" message={errors.country_code} />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone Number" />

                    <TextInput
                        id="phone"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.phone_number}
                        onChange={(e) => setData('phone_number', e.target.value)}
                        required
                        autoComplete="phone_number"
                    />

                    <InputError className="mt-2" message={errors.phone_number} />
                </div>


                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
