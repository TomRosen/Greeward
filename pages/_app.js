import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from '@/components/Navbar';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<Navbar></Navbar>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</SessionProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
