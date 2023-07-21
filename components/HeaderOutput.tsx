import { HeaderInputs } from '@/app/page'
import React from 'react'

type Props = {
    generalInfo: HeaderInputs
}

const HeaderOutput = ( { generalInfo }: Props) => {
  return (
    <div className='w-full flex flex-col'>
        <p className="text-3xl">{generalInfo.name}</p>
        <p className="text-base">{generalInfo.email}</p>
        <p className="text-base">{generalInfo.phone}</p>
        <p className="text-base">{generalInfo.address}</p>
    </div>
  )
}

export default HeaderOutput