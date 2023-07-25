import React from "react";

type Props = {
  children: React.ReactNode
	HTMLfor: string;
	labelText: string;
	classes?: string
};

const InputWrapper = ({ children, HTMLfor, labelText, classes }: Props) => {
	return (
		<label htmlFor={HTMLfor} className={`flex flex-col ${classes ? classes : ''}`}>
			<p className="ml-2 mb-2 font-semibold">{labelText}</p>
        	{children}
		</label>
	);
};

export default InputWrapper;
