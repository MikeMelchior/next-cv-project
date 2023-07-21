import React from 'react'

type Props = {
    children: React.ReactNode
    openState: boolean
}

const InputWidget = ( { children, openState }: Props) => {
  return (
    <div className={`grid items-center md:max-w-[600px] bg-slate-50 rounded-lg ${openState ? 'grid-cols-1' : 'grid-cols-0'}`}>  
        {children}
    </div>
  )
}

export default InputWidget





 
