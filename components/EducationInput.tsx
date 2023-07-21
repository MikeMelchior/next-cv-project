'use client'
import React, { useState } from 'react'
import InputContainer from './InputContainer'
import chevron from '../public/chevron.png'
import gradCap from '../public/grad-cap.png'
import Image from 'next/image'

type Props = {}

const EducationInput = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
      <InputContainer openState={open}>
      <div 
        className={`flex w-full p-[24px] ${open ? 'border-b-2' : ''}`}
        onClick={() => {setOpen(!open)}}
      >
        <Image src={gradCap} alt="" className='w-[30px] h-auto auto mr-4'/>
        <h2 className='text-2xl'>General Information</h2>
        <Image src={chevron} alt="" className={`w-[30px] ml-auto ${open ? 'rotate-180' : 'rotate-0'}`}/>
      </div>
    </InputContainer> 
    )
}

export default EducationInput