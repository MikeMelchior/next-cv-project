import { ExperienceInputs } from '@/app/page';
import { getMonth, getYear } from '@/utils/dateFunctions';
import React from 'react'
import { v4 } from 'uuid';

type Props = {
    experienceInfo: ExperienceInputs[]
}

const ExperienceOutput = ( { experienceInfo }: Props) => {

    return (
		<div className={`w-full pt-6`}>
            {experienceInfo.length > 0 &&
			    <h2 className="font-bold text-xl text-left w-full pb-1 border-b-2 border-slate-600 mb-4">Experience</h2>
            }
			{experienceInfo.length > 0 &&
				experienceInfo.map((exp) => (
					<div key={exp.id} className="flex justify-between text-sm pb-6">
						<div className="text-left">
							<p>
                                <strong className='text-sm'>
                                    {exp.jobTitle},&nbsp;
                                </strong>
                                <em className='text-xs'>
                                    {exp.company}
                                </em>
                            </p>
                            <ul className='list-disc pl-8 pt-1'>
                                {exp.description.split('. ').map(item => <li key={v4()}>{item}</li>)}
                            </ul>
                            
						</div>
                        <div className="text-right flex-shrink-0">
                            <p className="text-base">
                                {`
									${getMonth(exp.startDate)} ${getYear(exp.startDate)} - 
                                    ${exp.endDate !== 'Current' 
                                        ? `${getMonth(exp.endDate)} ${getYear(exp.endDate)}` 
                                        : 'Current'
                                    }
                                `}
                            </p>
                        </div>
					</div>
				))}
		</div>
	);
}

export default ExperienceOutput