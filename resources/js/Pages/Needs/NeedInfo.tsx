import {User} from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Need {
    id: number
    title: string
    body: string
}

interface NeedInfoProps {
    auth: {
       user: User
    }
    need: Need
}

export default function NeedInfo({auth, need}: NeedInfoProps) {
    return (<AuthenticatedLayout user={auth.user}>
        <h1>Need {need.id}</h1>
        <h1>Title: {need.title}</h1>
        <p>Body: {need.body}</p>
    </AuthenticatedLayout>)
}
