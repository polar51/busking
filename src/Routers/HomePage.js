import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css"
import axios from 'axios';
import Pagination from "react-js-pagination"

function HomePage() {
  const navigate = useNavigate();
  const [musicContent, setMusicContent] = useState([]);
  const [artContent, setArtContent] = useState([]);
  const items = 5;
  const [page, setPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);






  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const handlePageChange = (page) => {
    setPage(page);
  }

  let musicList = musicContent.slice(
    items*(page-1),
    items*(page-1)+items
  ).map((listItem) => {
    return <tr key={listItem.num} onClick={() => {navigate(`/Detail/${listItem.num}`,{state: listItem})}}>
    <td>{listItem.type}</td>
    <td>{listItem.title}</td>
    <td>{listItem.teamName}</td>
    <td>{listItem.date}</td>
  </tr>
  })

  let artList = artContent.slice(
    items*(page-1),
    items*(page-1)+items
  ).map((listItem) => {
    return <tr key={listItem.num} onClick={() => {navigate(`/Detail/${listItem.num}`,{state: listItem})}}>
    <td>{listItem.type}</td>
    <td>{listItem.title}</td>
    <td>{listItem.teamName}</td>
    <td>{listItem.date}</td>
  </tr>
  })




  const getMusicList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/musicList")
    );
    setMusicContent(res.data.reverse())
  };

  const getArtList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/artList")
    );
    setArtContent(res.data.reverse())
  };



  const clickLi = (e) => {
    let clickedLi = e.target.value
    navigate('/About',{state:clickedLi})
  } 


  useEffect(() => {
    getMusicList()
    getArtList()
    window.addEventListener('scroll', updateScroll);
  },[scrollPosition]);
  

  return(
    <div className={styles.Body}>
      <div className={`${styles.intro} ${scrollPosition<200 ? [styles.WhiteBorder] : [styles.BlackBorder]} `}>
        <h2>버스모아란?</h2>
        <p>"버스킹" + "모아보기"의 줄임말로 저희 홈페이지를 나타내는 말이자 버스킹 일정이나 정보등을 여러분들에게 모아서 보여줄 수 있는 홈페이지를 만들자는 의미를 가진 단어입니다</p>
      </div>
      <div className={`${styles.musicContent} ${scrollPosition<200 ? [styles.WhiteBorder] : [styles.BlackBorder]} `}>
        <p onClick={clickLi} value="2" className={styles.contBoxP}>음악 관련 버스킹의 일정들을 모아서 보여드립니다!</p>
        <table className={styles.Table}>
          <colgroup>
          <col width="100px" />
          <col width="400px" />
          <col width="130px" />
          <col width="130px" />
          </colgroup>
          <thead>
            <tr>
              <th>공연형태</th>
              <th>제목</th>
              <th>공연팀이름</th>
              <th>일시</th>
            </tr>
          </thead>
          <tbody>
          {musicList}
          </tbody>
        </table>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={musicList.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
          innerClass={styles.pagination}
          />
      </div>
      <div className={`${styles.artContent} ${scrollPosition<200 ? [styles.WhiteBorder] : [styles.BlackBorder]} `}>
        <p onClick={clickLi} value="3" className={styles.contBoxP}>종합 예술 관련 버스킹 일정들을 모아서 보여드립니다!</p>
        <table className={styles.Table}>
          <colgroup>
          <col width="100px" />
          <col width="400px" />
          <col width="130px" />
          <col width="130px" />
          </colgroup>
          <thead>
            <tr>
              <th>공연형태</th>
              <th>제목</th>
              <th>공연팀이름</th>
              <th>일시</th>
            </tr>
          </thead>
          <tbody>
          {artList}
          </tbody>
        </table>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={artContent.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
          innerClass={styles.pagination}
          />
        </div>
    </div>
  )
}

export default HomePage