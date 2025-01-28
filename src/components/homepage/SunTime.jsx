import React from 'react'
import { IoMdSunny } from 'react-icons/io'
import CurrentDate from '../../utils/CurrentDate'

export default function SunTime({timeObject}) {
    console.log(CurrentDate.arabic())
    return (
        <div
            className='w-full p-3 flex justify-between bg-gray-100'
        >
            <div
                className='w-1/2 text-center'
            >
                <p>{CurrentDate.arabic()}</p>
                <p>{`${CurrentDate.dayNames()} - ${CurrentDate.english()}`}</p>
                <p>{CurrentDate.bangla()}</p>
            </div>
            <div className='mx-0.5 w-0.5 bg-slate-300'></div>
            <div
                className="w-1/2 flex items-center space-x-2"
            >
                <div
                    className='px-2'
                >
                <IoMdSunny size={30} />
                </div>
                <div
                    className="w-full flex items-center justify-between"
                >
                    <div>
                        <p>
                            {timeObject.getPrayerTimeBangla(timeObject.getSunTime().sunrise)}
                        </p>
                        <p>সুর্যোদয়</p>
                    </div>
                    <div>
                        <p>
                            {timeObject.getPrayerTimeBangla(timeObject.getSunTime().sunset)}
                            </p>
                            <p>সুর্যাস্ত</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
