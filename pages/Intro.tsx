import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import styles from '../styles/Intro.module.scss'


export default function Intro() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <div className={styles.Intro}>
      <div className={styles.image}>
        <Link href="/">
          <a ref={ref}>
            {inView && (
              <Image  className='animate__animated animate__fadeIn' src="/5Scycle.png" width={416} height={400} alt='test' />
            )}
          </a>
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.sub}>生産管理の5S活動について</p>
        <h2 className={styles.main}>5S活動の歩み</h2>
        <p className={styles.expo}>
          ２年前より活動を開始
          <br />昨年は順調に活動を進め、
          <br />今年の３月には銅賞を獲得
        </p>
        <Link href="/">
          <a className={styles.button}>今までの活動</a>
        </Link>
      </div>
    </div>
  )
}