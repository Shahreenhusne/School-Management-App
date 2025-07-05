import React from 'react'
import Announcements from '@/components/Announcement'
import BigCalender from '@/components/BigCalendar'
import "react-big-calendar/lib/css/react-big-calendar.css"


const parent = () => {
 return (
    <div className='flex-1 p-4  flex flex-col xl:flex-row gap-4'>
      {/* left */}
         <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements/> 
      </div>

    </div>
  )
}

export default parent