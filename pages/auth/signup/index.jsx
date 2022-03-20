import SignUpForm from '@/components/signupForm';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function SignUp() {
	const { data: session, status } = useSession();
	const router = useRouter();

	function signupFormCallback() {
		router.push(
			`/auth/signin?callbackUrl=${
				window.location.protocol +
				'//' +
				window.location.hostname +
				(window.location.port ? ':' + window.location.port : '')
			}/welcome`
		);
	}

	if (status === 'loading') {
		return <div className='loader container'></div>;
	}
	return (
		<>
			{session ? (
				<div>
					<div className='text text-center mt-4 container'>
						<h1>You are already logged in!</h1>
						<p>
							You will be automatically redirected in 5 seconds or
							<Link href='/' passHref>
								Click here
							</Link>
							!
						</p>
					</div>
				</div>
			) : (
				<div className='container'>
					<SignUpForm callback={() => signupFormCallback()} />
					<a
						href='/api/auth/signin'
						className='alert-link btn btn-primary btn-sm'>
						Login
					</a>
				</div>
			)}

			<div className='container'>
				<SignUpForm callback={() => signupFormCallback()} />
				<a
					href='/api/auth/signin'
					className='alert-link btn btn-primary btn-sm'>
					Login
				</a>
			</div>
		</>
	);
}
