import NextAuth from 'next-auth';
import CredentialsProvider from '@/helper/auth/providers/credentials';
import redirect from '@/helper/auth/callbacks/redirect';

export default NextAuth({
	providers: [CredentialsProvider],
	pages: {
		error: '/auth/signin',
		newUser: '/welcome',
	},
	callbacks: {
		redirect,
	},
	session: { jwt: true },
	secret: process.env.NEXTAUTH_SECRET,
});
