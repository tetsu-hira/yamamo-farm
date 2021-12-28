import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Hamburger.module.scss';

export default function Hamburger(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hamburger} onClick={() => menuFunction()}>
          <span className={openMenu ? styles.open : undefined}></span>
          <span className={openMenu ? styles.open : undefined}></span>
          <p className={openMenu ? styles.open : undefined}>Menu</p>
        </div>
      </div>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <a>
                <p>Shop</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>About</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>Blog</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>ログイン</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>検索</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <p>買い物かご</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}