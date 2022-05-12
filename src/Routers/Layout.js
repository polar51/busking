
import styles from "./Layout.module.css"
import HomePage from "./HomePage"

function Layout() {
  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <div className={styles.inner}>
          <h1 className={styles.Hh1}>거리공연 일정</h1>
          <button className={styles.Hbtn}>Login</button>
        </div>
      </header>
      <section className={styles.section}>
        <nav className={styles.Nav}>
          <ul className={styles.NavUl}>
            <li>모든 일정보기</li>
            <li>음악 버스킹 일정</li>
            <li>종합 예술 버스킹 일정</li>
          </ul>
        </nav>
        <HomePage className={styles.Cont} />
      </section>
      <footer className={styles.Footer}>
          <p>
          Copyright 2021. Won Daehan All pictures cannot be copied without permission.
          </p>
      </footer>
    </div>
  )
};

export default Layout