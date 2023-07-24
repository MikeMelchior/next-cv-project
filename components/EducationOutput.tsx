import React from "react";
import { EducationInputs } from "@/app/page";
import { getMonth, getYear } from "@/utils/dateFunctions";

type Props = {
	educationInfo: EducationInputs[];
};

const EducationOutput = ({ educationInfo }: Props) => {

	return (
		<div className={`w-full pt-6 ${educationInfo.length > 0 && "border-t-2"}`}>
			{educationInfo.length > 0 &&
				educationInfo.map((edu) => (
					<div key={edu.id} className="flex justify-between text-sm">
						<div className="text-left">
							<p className="font-bold text-base">{edu.degree}</p>
							<p><em>{edu.school}</em></p>
							
						</div>

                        <div className="text-right">
                            <p className="text-base">
                                {`
									${getMonth(edu.startDate)} ${getYear(edu.startDate)} - 
                                    ${edu.endDate !== 'Current' 
                                        ? `${getMonth(edu.endDate)} ${getYear(edu.endDate)}` 
                                        : 'Current'
                                    }
                                `}
                            </p>
                            <p>{`${edu.city}, ${edu.country}`}</p>
                        </div>

					</div>
				))}
		</div>
	);
};

export default EducationOutput;
