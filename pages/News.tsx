import Link from 'next/link'
import 'animate.css';
import styles from '../styles/News.module.scss';

export default function News() {
  return (
    <div className={styles.News}>
      <div className={styles.NewsTitle}>ー 新着情報 ー</div>
      <div className={styles.NewsContent}>
        <div className={styles.date}>21.12.11</div>
        <div className={styles.info}>生産管理で5S会議を行いました</div>
        <div className={styles.date}>21.12.28</div>
        <div className={styles.info}>大掃除の写真をUPしました</div>
        <Link href="/">
          <a className={styles.link}>▶　一覧はこちら</a>
        </Link>
      </div>
    </div>
  )
}