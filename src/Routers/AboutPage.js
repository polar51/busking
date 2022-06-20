import styles from "./AboutPage.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import Pagination from "react-js-pagination"

function AboutPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [serchInput, setSerchInput] = useState("");
  const [content, setContent] = useState([]);
  const [inputSelect, setInputSelect] = useState("title");
  const items = 10;
  const [page, setPage] = useState(1);





  //게시판 불러오기
  const listType = () => {
    if(state === 3){
      getArtList()
    } else if (state === 2){
      getMusicList()
    } else {
      getAllList()
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


  const handlePageChange = (page) => {
    setPage(page);
  }


  let list = () => content.slice(
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


  
  //글쓰기 이벤트
  const GoCreate = () => {
    navigate('/Detail/Create')
  }

  const loginBoard = () => {
    const id = sessionStorage.getItem('loginId')
    if(id !== null) 
    return <button onClick={GoCreate} className={styles.btn}>글쓰기</button>
  }




  // 검색기능
  const handleSelect = (e) => {
    setInputSelect(e.target.value)
  };


  const handleSerchInput = (e) => {
    setSerchInput(e.target.value)
  };
  
  const serchBtn = () => {
    let body = {
      select: inputSelect,
      serchKeyword: serchInput
    }
    axios({
      method: 'post',
      url: 'http://localhost:5000/About/serch',
      data: body
    }).then((rows) => {
      setContent(rows.data)
    })
  }


  useEffect(() => {
    listType()
    list()
  },[list()]);
  






  return(
    <div className={styles.Body}>
      <div className={styles.MainCont}>
        <div className={styles.SerchCont}>
            <select value={inputSelect} onChange={handleSelect}>
              <option value="title">제목</option>
              <option value="type">공연형태</option>
              <option value="place">장소</option>
              <option value="text">내용</option>
              <option value="teamName">공연팀이름</option>
            </select>
            <input type="text" name="serch" onChange={handleSerchInput}/>
            <button onClick={serchBtn}>검색</button>
        </div>
        <div className={styles.TableCont}>
        <table className={styles.Table}>
        <colgroup>
        <col width="150px" />
        <col width="800px" />
        <col width="200px" />
        <col width="200px" />
        </colgroup>
        <thead>
          <tr>
            <th>공연형태</th>
            <th>제목</th>
            <th>공연팀이름</th>
            <th>공연날짜</th>
          </tr>
        </thead>
        <tbody>
          {list()}
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
        innerClass={styles.pagination}
        />
        </div>
      </div>
        {loginBoard()}
    </div>
  )
}


export default AboutPage;