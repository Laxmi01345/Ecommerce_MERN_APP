import React from 'react'
import { BsEmojiSmileFill } from "react-icons/bs";
export const Thank = () => {
  return (
    <div className='m-32 text-center text-3xl font-bold bg-pink-200 p-4'>
        <h1>Thank you for your Purchase !!</h1>
        <div className='flex justify-center m-4'>
  <BsEmojiSmileFill className='text-orange-800 m-2 ' size={60} />
  <BsEmojiSmileFill className='text-orange-800 m-2' size={60}/>
  <BsEmojiSmileFill className='text-orange-800 m-2' size={60}/>
</div>

    </div>
  )
}
