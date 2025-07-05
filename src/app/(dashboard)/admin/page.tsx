import Announcements from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import Calender from '@/components/Calendar'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const admin = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
         {/* user cards */}
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>    
          {/* middle chart  */}
          <div className='flex flex-col lg:flex-row gap-4'>
            {/* count chart */}
              <div className='w-full lg:w-1/3 h-[450px]'>
                <CountChart/>
              </div>
            {/* attendance chart */}
              <div className='w-full lg:w-2/3 h-[450px]'>
                <AttendanceChart/>
              </div>

          </div>
          {/* bottom chart */}
          <div className='w-full h-[500px]'>
             <FinanceChart/>
          </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
       <Calender/>
       <Announcements/> 

      </div>
    </div>
  )
}

export default admin

// flex-wrap in Tailwind (flex-wrap) allows flex items to wrap onto multiple lines if needed, instead of staying on a single line.