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
    <>
      <div className="mt-32 mx-auto">
        <h2 className='text-3xl font-bold text-center'>銀賞獲得に向けての活動</h2>
        <p className="text-2xl font-bold text-center leading-10 mt-5">
          獲得に向けて今年度は
          <br />現在の整頓状況を維持
        </p>
        <p className='text-lg font-thin mt-5 text-center'>
          今年は銀賞を獲得するため現在の整頓状況を維持しながら
          <br />より上のレベルを目指した活動を行う
        </p>
      </div>
      <div className='w-4/5 m-auto'>
        <div className='mt-28 flex'>
          <div className='w-1/2' ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="メイン画像1" />

            )}
          </div>
          <div className='pl-20 pt-20 w-1/2'>
            <h2 className='text-3xl my-1 mb-5'>日々の5S活動</h2>
            <p className='text-lg font-thin'>生産管理室のホワイトボードに計画予定を貼って活動内容の意識を図ったり、前月の実績やクロスパトロールの結果を貼って進捗を見える化しています。</p>
          </div>
        </div>
        <div className='mt-28 flex'>
          <div className='pr-20 pt-20 w-1/2'>
            <h2 className='text-3xl my-1 mb-5'>年に一度のPC清掃</h2>
            <p className='text-lg font-thin'>昨年より年に一度の大掃除と別に日を設け、生産管理室で使っているデスクトップPCの清掃を行っております。</p>
          </div>
          <div className='w-1/2' ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main2.jpg" width={540} height={360} alt="メイン画像1" />
            )}
          </div>
        </div>
        <div className='mt-28 flex'>
          <div className='w-1/2' ref={ref}>
            {inView && (
              <Image className='animate__animated animate__fadeInDown' src="/main3.jpg" width={540} height={360} alt="メイン画像1" />
            )}
          </div>
          <div className='pl-20 pt-20 w-1/2'>
            <h2 className='text-3xl my-1 mb-5'>安全にも配慮</h2>
            <p className='text-lg font-thin'>日々の整理整頓だけでなく、地震時にPCが倒れてこないようにするなどの安全対策も5S活動の一環として行います。</p>
          </div>
        </div>
      </div>
    </>
  )
}