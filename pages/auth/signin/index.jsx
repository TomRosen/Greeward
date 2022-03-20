import { useSession, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SignInForm from '@/components/signinForm';

export default function SignIn({ csrfToken }) {
	const { data: session, status } = useSession();
	const router = useRouter();

	function signinFormCallback() {}

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
							<Link href='/' passHref>
								Click here
							</Link>
							!
						</p>
					</div>
				</div>
			) : (
				<div className='container'>
					{console.log(csrfToken)}
					<SignInForm
						callback={signinFormCallback}
						csrfToken={csrfToken}
						error={router.query.error}
					/>
				</div>
			)}
		</>
	);
}

export async function getServerSideProps(context) {
	const csrfToken = await getCsrfToken();
	return {
		props: {
			csrfToken,
		},
	};
}
