'use client'
import React, {  useState, useRef, Dispatch, SetStateAction, FormEventHandler, FormEvent } from 'react'
import InputWidget from './InputWidget'
import person from '../public/person.png'
import chevron from '../public/chevron.png'
import Image from 'next/image'
import InputWrapper from './InputWrapper'
import Button from './Button'
import { HeaderInputs } from '@/app/page'

type Props = {
	setGeneralInfo: Dispatch<SetStateAction<HeaderInputs>> | ((prevState: HeaderInputs) => HeaderInputs)
};

const HeaderInput = ( { setGeneralInfo }: Props) => {

	const [open, setOpen] = useState(false);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const addressRef = useRef<HTMLInputElement>(null);


	function handleSubmit(e: FormEvent)  {
		e.preventDefault()
		setGeneralInfo(
			{
				name: nameRef.current!.value,
				email: emailRef.current!.value,
				phone: phoneRef.current!.value,
				address: addressRef.current!.value,
			}
		)
		setOpen(false)
	}

	let inputStyles = 'bg-slate-200 p-2 rounded-xl focus:outline-none'
    
	return (
		
		<InputWidget openState={open}>
			<div
				className={`flex items-center w-full p-[24px] ${open ? "border-b-2" : ""}`}
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Image src={person} alt="" className="w-[30px] h-[30px] mr-4" />
				<h2 className="text-2xl">General Information</h2>
				<Image
					src={chevron}
					alt=""
					className={`w-[30px] h-[30px] ml-auto ${
						open ? "rotate-180" : "rotate-0"
					}`}
				/>
			</div>
			{open ? (
				<form 
					className="p-6 flex flex-col gap-6"
					onSubmit={handleSubmit}
				>
					<InputWrapper
						HTMLfor='name'
						labelText='Full Name'
					>
						<input 
							ref={nameRef}
							type='text'
							id='fullName'
							name='fullName'
							placeholder='Full Name: eg. John Smith'
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<InputWrapper
						HTMLfor='email'
						labelText='Email'
					>
						<input 
							ref={emailRef}
							type="email" 
							id='email'
							name='email'
							placeholder='example@email.com'
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<InputWrapper
						HTMLfor='phoneNumber'
						labelText='Phone Number'
					>
						<input 
							ref={phoneRef}
							type="tel" 
							id='phoneNumber'
							name='phoneNumber'
							placeholder='123-456-7890'
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<InputWrapper
						HTMLfor='address'
						labelText='Province and City'
					>
						<input 
							ref={addressRef}
							type="text"
							id='address' 
							name='address'
							placeholder='Your City, Your Province'
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<Button
						type='submit'
					>
						Submit
					</Button>
				</form>
			) : null}
		</InputWidget>
	);
};

export default HeaderInput;
