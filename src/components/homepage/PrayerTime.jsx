import React from 'react'
import SalahLeftTime from '../SalahLeftTime'

export default function PrayerTimes({ timeObject }) {
    return (
        <div
            className='p-3 flex items-center space-x-2 bg-green-100'
        >
            <div>
                <SalahLeftTime/>
            </div>
            <div>
                {
                    timeObject && Object.keys(timeObject.getPrayersTime()).map(key => (
                        <p key={key}>
                            {timeObject.getPrayerNameBangla(key)} : {timeObject.getPrayerTimeBangla(timeObject.getPrayersTime()[key])}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}
