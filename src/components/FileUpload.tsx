import Image from 'next/image'
import React from 'react'
import { FieldError } from 'react-hook-form'

const FileUpload = ({register, error}: {register: any,  error ?: FieldError}) => {
  return (
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
        <label className='flex gap-2 items-center text-xs text-gray-500 cursor-pointer' htmlFor='image'>
          <Image src="/upload.png" alt="" width={28} height={28} />
          <span>Upload a photo</span>
        </label>
       <input type="file" id="image" {...register("img")} className="hidden" />
       {error?.message &&
       (
           <p className="text-xs text-red-400">{error.message.toString()}</p>
       )
        }

    </div>
  )
}

export default FileUpload