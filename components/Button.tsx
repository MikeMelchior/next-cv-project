import React, { EventHandler, SyntheticEvent } from 'react'

type Props = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: EventHandler<SyntheticEvent>
    classes?: string
}

const Button = ( { children, type="button", onClick, classes }: Props) => {
  return (
    <button
		className={`flex flex-1 items-center justify-center min-w-fit gap-4 py-[8px] px-[18px] text-base bg-teal-200 border-2 border-teal-400 text-slate-900 rounded-full hover:bg-teal-400" ${classes}`}
		type={type}
		onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button