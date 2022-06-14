import styles from "./Layout.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

function Layout() {
  let sessionStorage = window.sessionStorage;
  const navigate = useNavigate()

  const welcome = () => {
    let id = sessionStorage.getItem('loginId')
    if(id === null) {
      
    } else {
    return <p>{id + " 님 반갑습니다!"}</p>
    }
  }

  const handleLogin = () => {
    navigate('/Login')
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/busking')
  };



  const loginLogout = () => {
    let id = sessionStorage.getItem('loginId')
    if(id === null) {
      return <button className={styles.loginBtn} onClick={handleLogin}>로그인</button>
    } else {
      return <button className={styles.loginBtn} onClick={handleLogout}>로그아웃</button>
    }
  }


  const clickLi = (e) => {
    let clickedLi = e.target.value
    navigate('/About',{state:clickedLi})
  }


  useEffect(() => {
    welcome()
    loginLogout()
  },[sessionStorage])


  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <div className={styles.inner}>
          <h1 className={styles.Hh1}>
            <Link to="/busking" className={styles.Link}>거리공연 일정</Link>
          </h1>
          {welcome()}
        </div>
      </header>
      <section className={styles.section}>
        <nav className={styles.Nav}>
          <ul className={styles.NavUl}>
                <li onClick={clickLi} value="1">
                  모든 일정보기
                </li>
                <li onClick={clickLi} value="2">
                  음악 버스킹 일정
                </li>
                <li onClick={clickLi} value="3">
                  종합 예술 버스킹 일정
                </li>
                <li>
                  {loginLogout()}
                </li>
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