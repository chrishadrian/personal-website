import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Christopher Hadrian Wong</title>
				<meta name="description" content="Website created with ❤️" />
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
