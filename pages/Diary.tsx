import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Diary() {
  const { ref, inView } = useInView({
    rootMargin: '-30px',
    triggerOnce: true,
  });

  return (
    <>
      <div className='my-24'>
        <h2 className='text-3xl font-bold text-center'>
          金賞までの道のり
        </h2>
        <p className='text-lg font-thin mt-5 text-center'>
          生産管理は今まで唯一5S活動をしてきていない部署であり、
          <br />昨年度より長期的な最終目標として
          <br />金賞の獲得を掲げて活動を続けております。
        </p>
      </div>
      <div className='flex w-10/12 m-auto mb-10'>
        <div className='w-1/3 mx-4' ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className='text-xs mt-4'>2021/4/1</p>
          <p className='text-xl mt-1'>銅賞の獲得</p>
        </div>
        <div className='w-1/3 mx-4' ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className='text-xs mt-4'>2022/4/1</p>
          <p className='text-xl mt-1'>銀賞の獲得</p>
        </div>
        <div className='w-1/3 mx-4' ref={ref}>
          {inView && (
            <Image className='animate__animated animate__fadeInDown' src="/main1.jpg" width={540} height={360} alt="コラム1" />
          )}
          <p className='text-xs mt-4'>2023/4/1</p>
          <p className='text-xl mt-1'>金賞の獲得</p>
        </div>
      </div>
    </>
  )
}