import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Finish() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <>
      <div className='bg-gray-200 pt-8 pb-6'>
        <h2  className='text-3xl font-bold text-center'>最後に</h2>
        <p className='text-base font-thin mt-5 text-center leading-relaxed'>
          「金賞の獲得」
          <br />私たちは上記の目標に向けて日々活動を続けております。
          <br />そのための通過点として銅賞、銀賞の獲得があります。
        </p>
        <p className='text-base font-thin mt-5 text-center leading-relaxed'>
          今まで行ってきた活動はそのための一歩です。
          <br />本サイトにてその軌跡をご確認ください。
        </p>
      </div>
      <div className='mt-24' ref={ref}>
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
    </>
  )
}