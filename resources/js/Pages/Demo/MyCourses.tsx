import Authenticated from "@/Layouts/AuthenticatedLayout";
import {router} from "@inertiajs/react";

export default function MyCourses({auth ,courses}) {
    const getEstTime = (courses) => {
        let time = 0
        courses.map((course) => {
            time = time + course.est_time
        })
        return time
    }
    const goToCourse = (e) => {
        e.preventDefault()
        router.get(route('course'))
    }
    return <Authenticated user={auth.user}>
        <div className={'pt-10 pl-10'}>
            <h1 className={'text-2xl font-bold'}>My Courses</h1>
        </div>
        <div className={'flex flex-col gap-14 pt-10 pl-10'}>
            {courses.map((course) => {
                return <div
                    key={course.id}
                    className={'flex flex-row justify-between w-[40rem] border-2 border-gray-300 hover:border-blue-500 hover:cursor-pointer px-[.5rem] py-[.5rem] rounded-xl'}
                    onClick={goToCourse}
                >
                    <div>
                    <p>Title: {course.title}</p>
                    <p>Description: {course.description}</p>
                    </div>
                    <div>
                        <p>Est Time: {course.est_time}</p>
                        <p>Author: {course.author_name}</p>
                    </div>
                </div>
            })}
        </div>
    </Authenticated>
}
