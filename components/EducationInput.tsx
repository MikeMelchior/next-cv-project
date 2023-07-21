'use client'
import React, { useState } from 'react'
import InputWidget from './InputWidget'
import chevron from '../public/chevron.png'
import gradCap from '../public/grad-cap.png'
import Image from 'next/image'

type Props = {}

const EducationInput = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
      <InputWidget openState={open}>
      <div 
        className={`flex items-center w-full p-[24px] ${open ? 'border-b-2' : ''}`}
        onClick={() => {setOpen(!open)}}
      >
        <Image src={gradCap} alt="" className='w-[30px] h-[30px] auto mr-4'/>
        <h2 className='text-2xl'>General Information</h2>
        <Image src={chevron} alt="" className={`w-[30px] h-[30px] ml-auto ${open ? 'rotate-180' : 'rotate-0'}`}/>
      </div>
    </InputWidget> 
    )
}

export default EducationInput