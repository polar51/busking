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
  // const [lat, setLat] = useState('');
  // const [lon, setLon] = useState('');
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
      }).then(navigate(-1))
    }
  }

  const handleDeleteBtn = () => {
    handleDelete();
    
  }

  const loginBtn = () => {
    let id = sessionStorage.getItem('loginId');
    let checkId = state.id;
    if(id === checkId) 
      return <button onClick={handleUpdate} className={styles.btn}>수정</button>
  }
  const loginBtn2 = () => {
    let id = sessionStorage.getItem('loginId');
    let checkId = state.id;
    if(id === checkId) 
      return <button onClick={handleDeleteBtn} className={styles.btn}>삭제</button>
  }



  // 날씨 API 입니다.


  const getCoords = () => {
    let lat = 0
    let lon = 0
    if(state.place === "홍대"){
      lat =  37.5580798;
      lon =  126.9255336;
    }
    else if(state.place === "대학로"){
      lat =  37.580453
      lon = 127.001983
    }
    else if(state.place === "신촌"){
      lat = 37.557310
      lon = 126.936880
    }
    else if(state.place === "한강공원"){
      lat = 37.557310
      lon = 126.936880
    }
    else if(state.place === "건대"){
      lat = 37.557310
      lon = 126.936880
    }
    else if(state.place === "해운대"){
      lat = 35.159458
      lon = 129.160239
    }
    else if(state.place === "서면"){
      lat = 35.159458
      lon = 129.160239
    }
    else if(state.place === "남포동"){
      lat = 35.097523
      lon = 129.030636
    }
    else if(state.place === "동성로"){
      lat = 35.870874
      lon = 128.594816
    }
    else if(state.place === "김광석거리"){
      lat = 35.859662
      lon = 128.606574
    }
    else if(state.place === "수성못"){
      lat = 35.828859
      lon = 128.619917
    }
    return {lat, lon}
  }


  
  const getWeather = async(coords) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${key}&units=metric&lang=kr`;
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
    getWeather(getCoords())
  },[])


  return(
    <div className={styles.Body}>
      <button type="button" onClick={() => navigate(-1)} className={styles.backBtn}>뒤로가기</button>
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
            <td colSpan="3" className={styles.textBox}>{state.text}</td>
          </tr>
          <tr>
            <td colSpan="2" className={styles.teamText}>{state.teamText}</td>
            <td colSpan="1">{state.teamName}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.weatherBox}>
        <p>공연 장소의 현재 날씨입니다!</p>
        <p>기온: {temp}</p>
        <p>날씨: {des}</p>
        <img src={weatherIcon()} />
      </div>
      {loginBtn()}
      {loginBtn2()}
    </div>
  )
};

export default Detail;