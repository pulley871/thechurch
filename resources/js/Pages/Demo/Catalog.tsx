import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Disclosure} from "@headlessui/react";
import filers from '../../../Images/filters.png'
import levels from '../../../Images/levelsfilter.png'
import proIcon from '../../../Images/proicon.png'
import proVideoIcon from '../../../Images/Screenshot 2023-12-13 at 1.14.29 PM.png'
import liveStream from '../../../Images/Screenshot 2023-12-13 at 1.14.42 PM.png'
import scoreboard from  '../../../Images/Screenshot 2023-12-13 at 1.15.01 PM.png'
export default function Catalog({auth ,courses}) {
    const getEstTime = (courses) => {
        let time = 0
        courses.map((course) => {
            time = time + course.est_time
        })
        return time
    }
    return <Authenticated user={auth.user}>
        <div className={'flex flex-row w-full'}>
            <div className={'flex basis-1/12 min-w-[15%] p-5 h-screen flex-col gap-4'}>
                <p className={'text-white font-extrabold text-2xl'}>Filters</p>
                <p className={'text-gray-500 font-extrabold text-2xl'}>Application</p>
                <img className={'ml-1'} src={filers}/>
                <p className={'text-gray-500 font-extrabold text-2xl'}>Course Level</p>
                <img className={'ml-1'} src={levels} />
            </div>
            <div className={'bg-gradient-to-b from-black to-[#2A2A2A] basis-5/6 flex flex-col gap-4 p-10'}>
                <div className={'flex flex-row justify-between bg-[#4D4D4D] bg-opacity-[80%] p-5 rounded-md w-full h-[10rem] items-center'}>
                    <div className={'flex flex-row gap-4 basis-10/12'}>
                        <div className={'basis-2/12'}>
                            <img src={proIcon}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <p className={'text-2xl text-white font-bold'}>ProPresenter for Beginners</p>
                            <p className={'text-white text-sm'}>Are you new to ProPresenter? Get Started by learning the ProPresenter UI, how to create Presentations, how to configure Screens and get ready for your show</p>
                            <p className={'italic text-gray-500'}>10 Modules | Estimated Course Completion Time: 4 hours</p>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Add to My Courses</p>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gray-400 rounded-xl'}>View Course Preview</p>
                    </div>

                </div>

                <div className={'flex flex-row justify-between bg-[#4D4D4D] bg-opacity-[80%] p-5 rounded-md w-full h-[10rem] items-center'}>
                    <div className={'flex flex-row gap-4 basis-10/12'}>
                        <div className={'basis-2/12'}>
                            <img src={proVideoIcon}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <p className={'text-2xl text-white font-bold'}>ProVideoPlayer for Beginners</p>
                            <p className={'text-white text-sm'}>Get started with PVP by learning the ProVideoPlayer UI, how to configure Screens, how to set your layers, and how to show content on specific layers</p>
                            <p className={'italic text-gray-500'}>12 Modules | Estimated Course Completion Time: 5 hours</p>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Add to My Courses</p>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gray-400 rounded-xl'}>View Course Preview</p>
                    </div>

                </div>

                <div className={'flex flex-row justify-between bg-[#4D4D4D] bg-opacity-[80%] p-5 rounded-md w-full h-[10rem] items-center'}>
                    <div className={'flex flex-row gap-4 basis-10/12'}>
                        <div className={'basis-2/12'}>
                            <img src={liveStream}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <p className={'text-2xl text-white font-bold'}>Livestreaming with ProPresenter</p>
                            <p className={'text-white text-sm'}>Learn the ins and outs of streaming from within ProPresenter. This course will go over all teh different methods, equipment, and ways you can stream.</p>
                            <p className={'italic text-gray-500'}>6 Modules | Estimated Course Completion Time: 2 hours</p>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Add to My Courses</p>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gray-400 rounded-xl'}>View Course Preview</p>
                    </div>

                </div>

                <div className={'flex flex-row justify-between bg-[#4D4D4D] bg-opacity-[80%] p-5 rounded-md w-full h-[10rem] items-center'}>
                    <div className={'flex flex-row gap-4 basis-10/12'}>
                        <div className={'basis-2/12'}>
                            <img src={scoreboard}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <p className={'text-2xl text-white font-bold'}>Scoreboard Basics</p>
                            <p className={'text-white text-sm'}>Welcome to Scoreboard. This course will help you get your scoreboard created, configured, customized, and ready for game time</p>
                            <p className={'italic text-gray-500'}>8 Modules | Estimated Course Completion Time: 3 hours</p>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gradient-to-r from-[#FF624D] to-[#FA2AED] rounded-xl'}>Add to My Courses</p>
                        <p className={'text-sm text-white text-bold px-[1rem] py-[.2rem] bg-gray-400 rounded-xl'}>View Course Preview</p>
                    </div>

                </div>

            </div>
        </div>

    </Authenticated>
}
