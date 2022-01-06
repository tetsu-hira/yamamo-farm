import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'


export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.FooterContainer__title}>
            <Link href="/">
              <a>5S活動の記録</a>
            </Link>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <Image src="/Facebook.png" width={24} height={24} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image src="/Twitter.png" width={24} height={24} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image src="/Instagram.png" width={24} height={24} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.FooterContainer__link}>
            <p>リンク</p>
            <ul>
              <li>私たちについて</li>
              <li>メンバー紹介</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
              <li>お問い合わせ</li>
              <li>ブログ</li>
            </ul>
          </div>
          <div className={styles.FooterContainer__record}>
            <p>課題を見る</p>
            <ul>
              <li>コレクション</li>
            </ul>
          </div>
          <div className={styles.FooterContainer__poricy}>
            <p>ポリシー</p>
            <ul>
              <li>特定商取引法に関する表示</li>
              <li>プライバシーポリシー</li>
              <li>利用規約</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottom__content}>
          <p>© 2021 Tetsuhiro.Hirabayashi</p>
        </div>
      </div>
    </>
  );
}