import React, { FC } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: FC = () => (
  <>
    <header className={styles.Header}>
      <nav className={styles.HeaderNav} aria-label="Global">
        <div className={styles.HeaderLogoContainer}>
          <Link className={styles.HeaderLink} href="/" aria-label="Logo">
            Insight Forge
          </Link>
        </div>
        <div id="navbar-collapse-with-animation">
          <div className={styles.HeaderLinkContainer}>
            <Link className={styles.HeaderLink} href="/writearticle">
              Create Post
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
