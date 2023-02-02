import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';

interface Inputs {
	email: string;
	password: string;
}

function login() {
	const ref = useRef<any>(null);
	const [Login, setLogin] = useState(false);
	const { signIn, signUp } = useAuth();

	const {
		register, //원하는 인풋요소에 전개연산자로 등록해서 값 관리
		handleSubmit, //해당훅 전용 전송 이벤트 핸들러
		formState: { errors }, //register로 등록된 값이 올바르지 않으면 에러 반환
	} = useForm<Inputs>();

	//전송 이벤트 발생시 handleSubmit함수로 실행할 콜백함수 등록
	const join: SubmitHandler<Inputs> = async ({ email, password }) => {
		console.log('email', email);
		console.log('password', password);
		if (Login) {
			//만약 클릭한게 로그인 버튼이면 firebase에 로그인처리를 해주는 함수 호출
			await signIn(email, password);
		} else {
			//클릭한게 로그인버튼이 아니면 (회원가입버튼 이면) 로그인이 아닌 회원정보 등록 함수 호출
			await signUp(email, password);
		}
	};

	return (
		<div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
			<Head>
				<title>Next Flix Member</title>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
			</Head>

			<Image src='https://rb.gy/p2hphi' fill className='-z-10 opacity-60 hidden sm:inline object-cover' alt='Login' onLoadingComplete={() => ref.current.remove()} />
			{/* image loading bar */}
			<div
				className='w-[40px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[4px] border-solid border-[orange] rounded-[50%] border-t-[transparent] border-l-[transparent] z-10 animate-ani-rotation'
				ref={ref}
			></div>

			<img src='https://rb.gy/ulxxee' alt='logo' className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6' width={150} height={150} />

			<form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14' onSubmit={handleSubmit(join)}>
				<h1 className='text-4xl font-semibold'>Sign In</h1>

				<div className='space-y-4'>
					{/* register로 관리한 input요소 등록 */}
					<input type='email' placeholder='Email' className='input' {...register('email', { required: true })} />
					{/* 해당 항목 미 입력시 출력될 에러구문 */}
					{errors.email && <span>Please enter a valid email</span>}

					<input type='password' placeholder='Password' className='input' {...register('password', { required: true })} />
					{errors.password && <span>Please enter a valid password</span>}
				</div>

				{/* sign in (login) button */}
				<button className='w-full rounded bg-[#e40914] py-3 font-semibold' onClick={() => setLogin(true)}>
					Sign In
				</button>

				<div className='text-[gray]'>
					New to NextFlix?
					{/* sign up button */}
					<button className='text-white ml-4 hover:underline' onClick={() => setLogin(false)}>
						Sign up Now
					</button>
				</div>
			</form>
		</div>
	);
}

export default login;
