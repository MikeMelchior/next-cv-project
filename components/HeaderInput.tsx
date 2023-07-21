'use client'
import React, { useState } from 'react'
import InputContainer from './InputContainer'
import person from '../public/person.png'
import chevron from '../public/chevron.png'
import Image from 'next/image'

type Props = {};

const HeaderInput = (props: Props) => {

	const [open, setOpen] = useState(false);
    
	return (
		<InputContainer openState={open}>
			<div
				className={`flex w-full p-[24px] ${open ? "border-b-2" : ""}`}
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Image src={person} alt="" className="w-[30px] h-auto mr-4" />
				<h2 className="text-2xl">General Information</h2>
				<Image
					src={chevron}
					alt=""
					className={`w-[30px] ml-auto ${
						open ? "rotate-180" : "rotate-0"
					}`}
				/>
			</div>
			{open ? (
				<div className="p-[24px]">
					<label htmlFor="name">
						Full Name
						<input
							type="text"
							id="name"
							name="name"
							className="bg-slate-50 border-2 border-blue-500"
						/>
					</label>
				</div>
			) : null}
		</InputContainer>
	);
};

export default HeaderInput;
