import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import styles from '../styles/Finish.module.scss';


export default function Finish() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <div className={styles.Finish}>
      <div className={styles.foreword}>
        <h2>最後に</h2>
        <p>
          「金賞の獲得」
          <br />私たちは上記の目標に向けて日々活動を続けております。
          <br />そのための通過点として銅賞、銀賞の獲得があります。
        </p>
        <p>
          今まで行ってきた活動はそのための一歩です。
          <br />本サイトにてその軌跡をご確認ください。
        </p>
      </div>
      <div className={styles.image} ref={ref}>
        {inView && (
          <Image className='animate__animated animate__fadeInUp'
            src="/fin.jpg"
            width={2592}
            height={1944}
            alt='fin'
            priority={true}
          />
        )}
      </div>
    </div>
  )
}