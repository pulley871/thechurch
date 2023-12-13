import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {UserProp} from "@/Interfaces/User/UserProp";
import pill from '../../Images/Progress Pill Together.png'
import web1 from '../../Images/Webinar 1.png'
import web2 from '../../Images/Webinar 2.png'
import web3 from '../../Images/Webinar 3.png'
import check from '../../Images/Check Mark Done.png'
export default function Dashboard({ auth }: PageProps) {
    let user = auth.user as UserProp;
    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 px-6 flex flex-row">
                <div className="sm:px-6 lg:px-8 basis-2/3 flex-col gap-4 flex">
                    <div className="bg-[#2A2A2A] overflow-hidden shadow-sm sm:rounded-lg p-6 flex flex-col gap-4" >
                        <div className="text-white flex flex-row justify-between items-center">
                            <p className={'font-bold text-xl'}>{`My Course Overview`}</p>
                            <p className={'text-gray-500 font-bold'}>Add More Courses</p>
                        </div>
                        <div className={'flex flex-col gap-2 bg-[#4D4D4D] p-5 rounded-md'}>
                            <div className={'flex flex-row justify-between items-center'}>
                                <p className={'text-2xl text-white font-bold'}>ProPresenter for Beginners</p>
                                <a href={route('course')}>
                                    <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Continue</p>
                                </a>
                            </div>
                            <p className={'text-lg text-white'}>Current Lesson: Module 6 - Configuring Screens</p>
                            <div className={'flex flex-row gap-4'}>
                                <div className={'bg-gray-300 rounded-xl w-[80%] h-[1rem]'}>
                                    <div className={'bg-gradient-to-r from-[#FF624D] to-[#FA2AED] w-[25rem] rounded-xl h-[1rem]'}>a</div>
                                </div>
                                <p className={'text-white font-bold'}>60% Complete</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-2 bg-[#4D4D4D] p-5 rounded-md'}>
                            <div className={'flex flex-row justify-between items-center'}>
                                <div className={'flex flex-row gap-2'}>
                                <p className={'text-2xl text-white font-bold'}>Scoreboard Basics</p>
                                    <img className={'w-[2rem]'} src={check}/>
                                </div>
                                <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gray-400 rounded-xl'}>Review Course</p>
                            </div>
                            <p className={'text-lg text-white'}>Course Completed</p>
                            <div className={'flex flex-row gap-4'}>
                                <div className={'bg-gray-300 rounded-xl w-[80%] h-[1rem]'}>
                                    <div className={'bg-gradient-to-r from-[#FF624D] to-[#FA2AED] w-[100%] rounded-xl h-[1rem]'}>a</div>
                                </div>
                                <p className={'text-white font-bold'}>100% Complete</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-2 bg-[#4D4D4D] p-5 rounded-md'}>
                            <div className={'flex flex-row justify-between items-center'}>
                                <p className={'text-2xl text-white font-bold'}>ProPresenter Advanced</p>
                                <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Continue</p>
                            </div>
                            <p className={'text-lg text-white'}>Current Lesson: Module 1 - Using Macros</p>
                            <div className={'flex flex-row gap-4'}>
                                <div className={'bg-gray-300 rounded-xl w-[80%] h-[1rem]'}>
                                    <div className={'bg-gradient-to-r from-[#FF624D] to-[#FA2AED] w-[0rem] rounded-xl h-[1rem]'}>a</div>
                                </div>
                                <p className={'text-white font-bold'}>0% Complete</p>
                            </div>
                        </div>
                    </div>
                    <div className={'bg-[#2A2A2A] overflow-hidden shadow-sm sm:rounded-lg p-6 flex flex-col gap-4'}>
                        <p className='text-white font-bold text-xl'>Become a Certified Pro</p>
                        <p className={'text-gray-500 text-sm font-bold'}>Earn a certification in applications to become a Certified Pro and gain access to an exclusive Slack channel, receive Beta versions early, and get insider information & dedicated support.</p>
                        <p className='text-white font-bold'>Available Certification Exams:</p>
                        <div className={'gap-2 bg-[#4D4D4D] p-5 rounded-md'}>
                            <p className={'text-white font-bold text-xl'}>ProPresenter Certified Pro</p>
                            <div className={'flex flex-row justify-between items-center'}>
                                <p className={'text-white text-md'}>50 Questions | 60mins | each exam attempt cost $50</p>
                                <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Learn More</p>
                            </div>
                            <p className={'text-sm text-gray-500'}>Must Complete <span className={'text-white'}>ProPresenter for Beginners</span> and <span className={'text-white'}>ProPresenter Advanced</span> courses before eligble to take the exam.</p>
                        </div>
                    </div>
                </div>
                <div className={'sm:px-6 lg:px-8 basis-1/3 flex-col gap-4 flex bg-[#2A2A2A] shadow-sm sm:rounded-lg p-6'}>
                    <div className={'flex flex-row justify-between items-center'}>
                        <p className='text-white font-bold text-xl'>Upcoming Webinars</p>
                        <p className='text-gray-500 font-bold text-md'>View Past Webinars</p>
                    </div>
                    <div>
                        <img src={web1} />
                    </div>
                    <div>
                        <img src={web2} />
                    </div>
                    <div>
                        <img src={web3} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
