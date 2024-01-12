import { useState } from 'react';
import Login from './login/page'
import styles from './page.module.css';


const Home = () => {
  // code

  return (
    <div className={styles.App}>
        {/*<Header title="Pet Life" />*/}
      <div className={styles.container}>
        <Login />
      </div>
    </div>
  )
}

export default Home;