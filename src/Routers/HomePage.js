import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/lazy';
import styles from "./HomePage.module.css"
import axios from 'axios';

function HomePage() {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const getList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/allList")
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
            <th>작성자</th>
            <th>일시</th>
          </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
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
        {list}
          
        </tbody>
      </table>
      <div className={styles.Video}>
                <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/jMUYtK7Vozg'}    
                    width='400px'         
                    height='500px'       
                    playing={true}        
                    muted={true}          
                    controls={true}     
                    light={false}         
                    pip={true}            
                    poster={'https://youtu.be/jMUYtK7Vozg'}
                />
            </div>
    </div>
  )
}

export default HomePage