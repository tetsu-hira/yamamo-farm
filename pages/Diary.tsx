import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import styles from '../styles/Diary.module.scss';


export default function Diary() {
  const { ref, inView } = useInView({
    rootMargin: '-30px',
    triggerOnce: true,
  });

  return (
    <div className={styles.Diary}>
      <div className={styles.foreword}>
        <h2>
          金賞までの道のり
        </h2>
        <p>
          生産管理は今まで唯一5S活動をしてきていない部署であり、
          <br />昨年度より長期的な最終目標として
          <br />金賞の獲得を掲げて活動を続けております。
        </p>
      </div>
      <div className={styles.record}>
        <div className={styles.column} ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className={styles.date}>2021/4/1</p>
          <p className={styles.title}>銅賞の獲得</p>
        </div>
        <div className={styles.column} ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className={styles.date}>2022/4/1</p>
          <p className={styles.title}>銀賞の獲得</p>
        </div>
        <div className={styles.column} ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className={styles.date}>2023/4/1</p>
          <p className={styles.title}>金賞の獲得</p>
        </div>
      </div>
    </div>
  )
}