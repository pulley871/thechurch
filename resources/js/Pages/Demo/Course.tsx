import Authenticated from "@/Layouts/AuthenticatedLayout";
import {router} from "@inertiajs/react";
import {useEffect, useState} from "react";
import sidebar from '../../../Images/coursesidebar.png'

export default function Course({auth ,course}) {
    const [displayScreensDropdown, setDisplayScreensDropDown] = useState(false)
    const [screensClicked, setScreensClicked] = useState(false)
    const [configureScreensClicked, setConfigureScreensClicked] = useState(false)
    useEffect(() => {
        if (screensClicked === true) {
            setDisplayScreensDropDown(true)
        } else {
            setDisplayScreensDropDown(false)
        }
    }, [screensClicked]);
    const screensClickedFunc = () => {
        setConfigureScreensClicked(true)
        setDisplayScreensDropDown(false)
    }
    return <Authenticated user={auth.user}>
        {/*<div className={'pt-10 pl-10'}>*/}
        {/*    <h1 className={'text-2xl font-bold'}>{course.title}</h1>*/}
        {/*</div>*/}
        {/*<div className={'flex flex-col gap-14 pt-10 pl-10 pr-10'}>*/}
        {/*    <div className={'h-[40rem] bg-black'}>*/}
        {/*        <div className='flex flex-row gap-3'>*/}
        {/*            <p className={'text-white font-bold text-sm'}>ProPresenter</p>*/}
        {/*            <p className={'text-white font-bold text-sm'}>File</p>*/}
        {/*            <p className={'text-white font-bold text-sm'}>Edit</p>*/}
        {/*            <p className={'text-white font-bold text-sm'}>Presentation</p>*/}
        {/*            <a onClick={() => setScreensClicked(!screensClicked)}>*/}
        {/*            <p className={`text-white font-bold text-sm hover:cursor-pointer ${displayScreensDropdown ? 'bg-gray-500 rounded-sm' : ''}`}>Screens</p>*/}
        {/*            </a>*/}
        {/*            {displayScreensDropdown && <div className={'z-20 absolute bg-gray-800 px-[.5rem] py-[.5rem] rounded-lg top-[12.7rem] left-[18.2rem]'}>*/}
        {/*                <p className={'text-gray-500 italic font-bold text-sm hover:cursor-pointer'}>Audience</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Enable</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Live:default</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer border-gray-300 border-b-2 pb-1'}>Edit Looks...</p>*/}
        {/*                <p className={'text-gray-500 italic font-bold text-sm hover:cursor-pointer pt-1'}>Stage</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Enable</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Stage Screen: MultiTracks Chords + Lyrics</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer border-gray-300 border-b-2 pb-1'}>Edit Layouts...</p>*/}
        {/*                <a onClick={screensClickedFunc}>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer border-gray-300 border-b-2 pb-1 pt-1'}>Configure Screens...</p>*/}
        {/*                </a>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Start Capture</p>*/}
        {/*                <p className={'text-white font-bold text-sm hover:cursor-pointer'}>Capture Settings</p>*/}

        {/*            </div>}*/}
        {/*            <p className={'text-white font-bold text-sm'}>View</p>*/}
        {/*            <p className={'text-white font-bold text-sm'}>Window</p>*/}
        {/*            <p className={'text-white font-bold text-sm'}>Help</p>*/}
        {/*        </div>*/}
        {/*        <div>PP container*/}
        {/*            <div>pp top bar</div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className={'flex flex-row'}>
            <div className={'flex basis-3/12'}>
                <img src={sidebar}/>
            </div>
            <div className={'flex basis-9/12'}>
                <iframe className="b-1 w-full h-full" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0ulLRkbJ7BMAioVqN5fES3%2FProUniversity%3Ftype%3Ddesign%26node-id%3D6-10%26t%3D1bJPjGzxJtUkkDYX-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A3%26mode%3Ddesign" allowfullscreen></iframe>
            </div>
        </div>

    </Authenticated>
}
