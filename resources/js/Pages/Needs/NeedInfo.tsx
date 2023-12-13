import {User} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from "@/Components/PrimaryButton";
import {router} from "@inertiajs/react";

interface Need {
    id: number
    title: string
    body: string
    total_views: number
    need_adpoted: boolean
}

interface NeedInfoProps {
    auth: {
       user: User
    }
    need: Need
}

export default function NeedInfo({auth, need}: NeedInfoProps) {
    const adoptNeed = () => {
        router.post(route('accept-need'), {need_id: need.id})
    }

    return (<AuthenticatedLayout user={auth.user}>
        <h1>Need {need.id}</h1>
        <h1>Title: {need.title}</h1>
        <p>Body: {need.body}</p>
        {need.need_adpoted && (<PrimaryButton onClick={adoptNeed}>Adopt Need</PrimaryButton>)}
    </AuthenticatedLayout>)
}
