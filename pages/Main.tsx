import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import styles from '../styles/Main.module.scss';


export default function Main() {
  const { ref, inView } = useInView({
    rootMargin: '30px',
    triggerOnce: true,
  });
  
  return (
    <div className={styles.Main}>
      <div className={styles.foreword}>
        <h2>今年度目標：銀賞の獲得</h2>
        <p className={styles.big}>
          獲得に向けてまずは現在の
          <br />整頓状況を維持することが条件
        </p>
        <p className={styles.small}>
          その上でさらに細かな箇所を改善していくことで
          <br />銀賞の条件を達成して申請を行いたいと思います。
        </p>
      </div>
      <div className={styles.intro}>
        <div className={styles.group}>
          <div className={styles.image} ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="メイン画像1" />

            )}
          </div>
          <div className={styles.contentLeft}>
            <h2>日々の5S活動</h2>
            <p>生産管理室のホワイトボードに計画予定を貼って活動内容の意識を図ったり、前月の実績やクロスパトロールの結果を貼って進捗を見える化しています。</p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.contentRight}>
            <h2>年に一度のPC清掃</h2>
            <p>昨年より年に一度の大掃除と別に予定日を設けて、生産管理室で使っているデスクトップPCの清掃を行うことで仕事道具の維持管理を行っております。</p>
          </div>
          <div className={styles.image} ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main2.jpg" width={540} height={360} alt="メイン画像1" />
            )}
          </div>
          <div className={styles.contentLeft2}>
            <h2>年に一度のPC清掃</h2>
            <p>昨年より年に一度の大掃除と別に予定日を設けて、生産管理室で使っているデスクトップPCの清掃を行うことで仕事道具の維持管理を行っております。</p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.image} ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main3.jpg" width={540} height={360} alt="メイン画像1" />
            )}
          </div>
          <div className={styles.contentLeft}>
            <h2>安全にも配慮</h2>
            <p>日々の整理整頓や清掃だけでなく、地震時にPCが倒れてこないようにするなどの安全対策も5S活動の一環として行うことで、より良い職場を作ります。</p>
          </div>
        </div>
      </div>
    </div>
  )
}