import React from 'react'

export default function RestictedPrayerTimes({ timeObject }) {
    return (
        <div
            className='p-3 flex justify-between border'
        >
            <div
                className='w-1/2'
            >
                <p>সালাতের নিষিদ্ধ সময়</p>
                {
                    timeObject && Object.keys(timeObject.getRestictedPrayersTime()).map(key => (
                        <p key={key}>
                            {timeObject.getPrayerNameBangla(key)} : {timeObject.getPrayerTimeBangla(timeObject.getRestictedPrayersTime()[key])}
                        </p>
                    ))
                }
            </div>
            <div
                className='w-1/2'
            >
                <button>নফল নামাযের ওয়াক্ত</button>
                <button>বিশেষ দ্রষ্টব্য(FAQ)</button>
            </div>
        </div>

    )
}
