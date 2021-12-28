import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Hamburger from './Hamburger';
import styles from '../styles/Header.module.scss'


export default function Header() {

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderContainer__title}>
          <Link href="/">
            <a className={styles.HeaderContainer__titleLogo}>5S活動の記録</a>
          </Link>
        </div>
        <ul className={styles.HeaderContainer__list}>
          <li>
            <Link href="/">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.HeaderContainer__icon}>
          <li>
            <Link href="/">
              <a>
                <Image src="/user.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <Image src="/search.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <Image src="/cart.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
        </ul>
        <Hamburger />
      </div>
    </header>
  );
}