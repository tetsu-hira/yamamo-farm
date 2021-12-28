import Link from 'next/link'

export default function Band() {
  return (
    <div className='bg-gray-200 mt-20 h-32 flex'>
      <Link href="/">
        <a className="bg-blue-300 text-white text-center m-auto w-48 h-10 block rounded-md text-sm shadow-md leading-10 duration-500">過去の活動を見る</a>
      </Link>
    </div>
  )
}