import Link from 'next/link'
import styles from '../styles/Band.module.scss';

export default function Band() {
  return (
    <div className={styles.Band}>
      <Link href="/">
        <a className={styles.button}>今までの活動</a>
      </Link>
    </div>
  )
}