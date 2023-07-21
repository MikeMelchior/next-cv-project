import React from "react";

type Props = {
  children: React.ReactNode
	HTMLfor: string;
	labelText: string;
};

const InputWrapper = ({ children, HTMLfor, labelText }: Props) => {
	return (
		<label htmlFor={HTMLfor} className="flex flex-col">
			<p className="ml-2 mb-2 font-semibold">{labelText}</p>
      {children}
		</label>
	);
};

export default InputWrapper;
