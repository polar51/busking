import styles from "./AboutPage.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import Pagination from "react-js-pagination"

function AboutPage() {
  const navigate = useNavigate();
  const [serchInput, setSerchInput] = useState("");
  const [content, setContent] = useState([]);
  const { state } = useLocation();


  //게시판 불러오기
  const listType = () => {
    if(state === 1){
      getAllList()
    } else if (state === 2){
      getMusicList()
    } else {
      getArtList()
    }
  }


  const getAllList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/allList")
    );
    setContent(res.data.reverse())
  };

  const getMusicList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/musicList")
    );
    setContent(res.data.reverse())
  };

  const getArtList = async () => {
    const res = await (
      await axios.get("http://localhost:5000/artList")
    );
    setContent(res.data.reverse())
  };




  //불러온 게시판 뿌려주기
  let list =  content.map((listItem) => (
    <tr key={listItem.num} onClick={() => {navigate(`/Detail/${listItem.num}`,{state: listItem})}}>
          <td>{listItem.type}</td>
          <td>{listItem.title}</td>
          <td>{listItem.teamName}</td>
          <td>{listItem.date}</td>
        </tr>
  ))
  
  //글쓰기 이벤트
  const GoCreate = () => {
    navigate('/Detail/Create')
  }

  const loginBoard = () => {
    const id = sessionStorage.getItem('loginId')
    if(id !== null) 
    return <button onClick={GoCreate}>글쓰기</button>
  }


  //페이지 이동
    const [page, setPage] = useState(1);
  
    const handlePageChange = (page) => {
      setPage(page);
    };


  // 검색기능
  const handleSerchInput = (e) => {
    setSerchInput(e.target.value)
  };
  
  const serchBtn = () => {
    
  }


  useEffect(() => {
    listType()
  },[list]);
  






  return(
    <div className={styles.Body}>
      <div className={styles.MainCont}>
        <div className={styles.SerchCont}>
            <input type="text" name="serch" onChange={handleSerchInput}/>
            <button>검색</button>
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
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        />
        </div>
      </div>
        {loginBoard()}
    </div>
  )
}


export default AboutPage;