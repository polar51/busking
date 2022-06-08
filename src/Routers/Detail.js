import * as React from 'react'
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from 'react';
import styles from "./Detail.module.css"
import axios from 'axios';



function Detail() {
  let sessionStorage = window.sessionStorage;
  const { state } = useLocation();
  const navigate = useNavigate();
  
        // 날씨 api 관련 부분입니다.
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [temp, setTemp] = useState('');
  const [des, setDes] = useState('');
  const [icon, setIcon] = useState('');
  const key = "8f175046fe367b6d5bfe46997ea542c8";


//로그인후 버튼 생성 기능

  const handleUpdate = () => {
      navigate("/Detail/Update", {state:state});
  };

  const handleDelete = async() => {
    let body = {
      num : state.num
    }
    const deleteConfirm = window.confirm('정말 삭제하시겠습니까?')
    if(deleteConfirm){
      await axios({
        method: 'post',
        url: 'http://localhost:5000/Detail/delete',
        data: body
      })
    }
  }

  const handleDeleteBtn = () => {
    handleDelete();
    navigate('/About')
  }

  const loginBtn = () => {
    let id = sessionStorage.getItem('loginId');
    let checkId = state.id;
    if(id === checkId) 
      return <button onClick={handleUpdate}>수정</button>
  }
  const loginBtn2 = () => {
    let id = sessionStorage.getItem('loginId');
    let checkId = state.id;
    if(id === checkId) 
      return <button onClick={handleDeleteBtn}>삭제</button>
  }



  const getCoords = () => {
    if(state.place === "홍대"){
      setLat("37.5580798")
      setLon("126.9255336")
    }
    if(state.place === "대학로"){
      setLat("37.580453")
      setLon("127.001983")
    }
    if(state.place === "신촌"){
      setLat("37.557310")
      setLon("126.936880")
    }
    if(state.place === "한강공원"){
      setLat("37.557310")
      setLon("126.936880")
    }
    if(state.place === "건대"){
      setLat("37.557310")
      setLon("126.936880")
    }
    if(state.place === "해운대"){
      setLat("35.159458")
      setLon("129.160239")
    }
    if(state.place === "서면"){
      setLat("35.159458")
      setLon("129.160239")
    }
    if(state.place === "남포동"){
      setLat("35.097523")
      setLon("129.030636")
    }
    if(state.place === "동성로"){
      setLat("35.870874")
      setLon("128.594816")
    }
    if(state.place === "김광석거리"){
      setLat("35.859662")
      setLon("128.606574")
    }
    if(state.place === "수성못"){
      setLat("35.828859")
      setLon("128.619917")
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=kr`;

  const getWeather = async(lat, lon) => {
    await axios.get(url)
    .then(resData => {
      setTemp(resData.data.main.temp)
      setDes(resData.data.weather[0].description)
      setIcon(resData.data.weather[0].icon)
    })
  }
  
  const weatherIcon = () => {
    let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    return iconUrl
  }

  
  
  useEffect(()=>{
    // getCoords();
    // getWeather();
    // weatherIcon()
  },[])


  return(
    <div className={styles.Body}>
      <button type="button" onClick={() => navigate(-1)}>뒤로가기</button>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th colSpan="3">{state.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>공연형태</td>
            <td>공연일시</td>
            <td>공연장소</td>
          </tr>
          <tr>
            <td>{state.type}</td>
            <td>{state.date}</td>
            <td>{state.place}</td>
          </tr>
          <tr>
            <td colSpan="3">{state.text}</td>
          </tr>
          <tr>
            <td colSpan="2">{state.teamText}</td>
            <td colSpan="1">{state.teamName}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {loginBtn()}
        {loginBtn2()}
        <p>{temp}</p>
        <p>{des}</p>
        {/* <img src={weatherIcon()} /> */}
        {/* 컴포넌트를 만들어야할수도..? */}
      </div>
    </div>
  )
};

export default Detail;