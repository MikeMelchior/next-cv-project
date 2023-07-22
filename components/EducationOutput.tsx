import { EducationInputs } from '@/app/page'
import React from 'react'

type Props = {
    educationInfo: EducationInputs[]
}

const EducationOutput = ( { educationInfo }: Props) => {
  return (
    <div className='w-full border-t-2 pt-6'>
        {educationInfo && 
            educationInfo.map(edu => (
                <div 
                    key={edu.id}
                    className=''
                >
                    <h1>{edu.degree}</h1>
                    <p>{edu.school}</p>
                    <p>{`${edu.city}, ${edu.country}`}</p>
                    <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                </div>    
            ))
        }
    </div>
  )
}

export default EducationOutput