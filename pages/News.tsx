import 'animate.css';
import styles from '../styles/News.module.scss';

export default function News() {
  return (
    <div className={styles.News}>
      <div className={styles.NewsTitle}>ー 新着情報 ー</div>
      <div className={styles.NewsContent}>
        <div className={styles.date}>21.10.11</div>
      </div>
    </div>
  )
}