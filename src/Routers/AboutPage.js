import styles from "./AboutPage.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AboutPage() {
  let navigate = useNavigate();
  const [content, setContent] = useState([]);
  const getList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/list")
    );
    setContent(res.data.reverse())
  };


  let list =  content.map((listItem) => (
    <tr key={listItem.num} onClick={() => {navigate(`/Detail/${listItem.num}`,{state: listItem})}}>
          <td>{listItem.type}</td>
          <td>{listItem.title}</td>
          <td>{listItem.teamName}</td>
          <td>{listItem.date}</td>
        </tr>
  ))
  
  
  const GoCreate = () => {
    navigate('/Detail/Create')
  }

  


  useEffect(() => {
    getList()
  },[list]);
  




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
            <th>공연날짜</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
        </div>
      </div>
        <button onClick={GoCreate}>글쓰기</button>
    </div>
  )
}


export default AboutPage;