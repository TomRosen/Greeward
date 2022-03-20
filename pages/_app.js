import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import Navbar from '@/components/Navbar';

const queryClient = new QueryClient();

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={session}>
                <Navbar></Navbar>
                <div className="max-w-5xl mx-auto">
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false}/>
                </div>
            </SessionProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
