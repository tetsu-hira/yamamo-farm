import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}
