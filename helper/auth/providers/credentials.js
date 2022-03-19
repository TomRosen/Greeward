import CredentialsProvider from 'next-auth/providers/credentials';
import { authenticateLogin } from '@/helper/auth/authenticateCredentials';

const credentialsParams = {
	email: {
		label: 'Email',
		type: 'text',
		placeholder: 'email@email.com',
	},
	password: { label: 'Password', type: 'password' },
};

export default CredentialsProvider({
	name: 'credentials',
	credentials: {
		email: {
			label: 'Email',
			type: 'text',
			placeholder: 'email@email.com',
		},
		password: { label: 'Password', type: 'password' },
	},
	async authorize(credentials, req) {
		console.log('authorize');
		const user = await authenticateLogin(credentials);
		return Promise.resolve(user);
	},
});
