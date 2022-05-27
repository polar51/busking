import styles from "./AboutPage.module.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function AboutPage() {

  const [content, setContent] = useState([]);
  const getList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/list")
    );
    setContent(res.data.reverse())
  };

  useEffect(() => {
    getList()
  },[]);
  

  // 객체 번호당 tr이 붙고 value는 td로 묶는다




  return(
    <div className={styles.Body}>
      <div className={styles.MainCont}>
        <div className={styles.SerchCont}>
          <form>
            <input type="text" name="serch"/>
            <input type="submit" value="검색" />
          </form>
        </div>
        <div className={styles.TableCont}>
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
            <th>작성자</th>
            <th>일시</th>
          </tr>
        </thead>
        <tbody>
          {content.map((listItem, idx) => (
            <tr key={content[idx].num}>
                <td>{content[idx].type}</td>
                <td>{content[idx].title}</td>
                <td>{content[idx].teamName}</td>
                <td>{content[idx].date}</td>
              </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
        <button>글쓰기</button>
    </div>
  )
}


export default AboutPage;