import React from 'react';

import styles from './home.module.css';
import UseScrollToTop from '../../hooks/use-scroll-to-top';

function Home() {
  UseScrollToTop();
  return <div className={styles.containerHome}>home page</div>;
}

export default Home;
