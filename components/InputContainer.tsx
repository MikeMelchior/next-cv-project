import React from 'react'

type Props = {
    children: React.ReactNode
    openState: boolean
}

const InputContainer = ( { children, openState }: Props) => {
  return (
    <div className={`grid items-center md:max-w-[600px] bg-slate-50 rounded-lg ${openState ? 'grid-cols-1' : 'grid-cols-0'}`}>  
        {children}
    </div>
  )
}

export default InputContainer