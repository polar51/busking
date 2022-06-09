import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css"
import axios from 'axios';
import Pagination from "react-js-pagination"


function HomePage() {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const items = 5;
  const [page, setPage] = useState(1);





  const handlePageChange = (page) => {
    setPage(page);
  }

  let list = content.slice(
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




  const getList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/allList")
    );
    setContent(res.data.reverse())
  };




  useEffect(() => {
    getList()
  },[]);
  

  return(
    <div className={styles.Body}>
      <table className={styles.Table}>
        <colgroup>
        <col width="100px" />
        <col width="500px" />
        <col width="100px" />
        <col width="100px" />
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
        {list}
        </tbody>
      </table>
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={content.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        />
      <table className={styles.Table}>
        <colgroup>
        <col width="100px" />
        <col width="500px" />
        <col width="100px" />
        <col width="100px" />
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
        {list}
          
        </tbody>
      </table>
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={content.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        />
      <div className={styles.Video}>
            </div>
    </div>
  )
}

export default HomePage