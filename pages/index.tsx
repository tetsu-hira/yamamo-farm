import Head from 'next/head'
import Slider from './Slider'
import Intro from './Intro'
import Main from './Main'
import Band from './Band'
import Diary from './Diary'
import Finish from './Finish'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Home() {
  const { ref, inView } = useInView({
    rootMargin: '-5px',
    triggerOnce: true,
  });
  
  return (
    <div className="font-body text-primary">
      <Head>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
        <title>生産管理の5S活動</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      </Head>
      <main>
        <div ref={ref}  className='animate__animated animate__fadeIn'>
          {inView && (
            <div>
              <Slider />
              <Intro />
              <Main />
              <Band />
              <Diary />
              <Finish />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
