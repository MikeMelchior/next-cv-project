import React, { EventHandler, SyntheticEvent } from 'react'

type Props = {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: EventHandler<SyntheticEvent>
}

const DeleteButton = ( { children, type="button", onClick }: Props) => {
  return (
    <button
        className="flex flex-1 items-center justify-center min-w-fit gap-4 py-[8px] px-[18px] text-base bg-pink-200 border-2 border-red-400 text-slate-900 rounded-full hover:bg-red-400"
        type={type}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default DeleteButton