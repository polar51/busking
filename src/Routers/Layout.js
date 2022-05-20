import styles from "./Layout.module.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <div className={styles.inner}>
          <h1 className={styles.Hh1}>
            <Link to="/busking">거리공연 일정</Link>
          </h1>
          <Link to="/Login">
            <button className={styles.Hbtn}>
              Login
            </button> 
          </Link>
        </div>
      </header>
      <section className={styles.section}>
        <nav className={styles.Nav}>
          <ul className={styles.NavUl}>
              <Link to="/About">
                <li>
                  모든 일정보기
                </li>
              </Link>
              <Link to="/About">
                <li>
                  음악 버스킹 일정
                </li>
              </Link>
              <Link to="/About">
                <li>
                  종합 예술 버스킹 일정
                </li>
              </Link>
          </ul>
        </nav>
        <Outlet />
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