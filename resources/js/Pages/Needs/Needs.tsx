import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {User} from '@/types';
import {UserProp} from "@/Interfaces/User/UserProp";
import {ColumnDef} from "@tanstack/react-table";
import NeedsList from "@/Pages/Needs/Partials/NeedsList";

type Needs = {
    id: string
    title: string
    priority: number
    requested_deadline: string
}

interface PageProps {
    auth: {
        user: User
    },
    columns: ColumnDef<Needs>[],
    table_data: Needs[]
}
export default function Needs({ auth, columns, table_data }: PageProps) {
    let user = auth.user as UserProp;
    const needSelected = (item: any): void | null => {
        router.get(route('need-info', item.id))
    }
    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Needs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{`Available Needs`}</div>
                    </div>
                    <NeedsList columns={columns} data={table_data} callback={needSelected}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
