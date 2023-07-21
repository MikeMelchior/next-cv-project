import React from 'react'

type Props = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ( { children, type="button" }: Props) => {
  return (
    <button
    className="flex items-center justify-center min-w-fit gap-4 ml-auto py-[8px] px-[18px] text-base bg-teal-200 border-2 border-teal-400 text-slate-900 rounded-full hover:bg-teal-400"
    type={type}
    >
        {children}
    </button>
  )
}

export default Button