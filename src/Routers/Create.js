import * as React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker"
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./Create.module.css"
import axios from 'axios';





const Create = () => {
  const Navigate = useNavigate();
  let sessionStorage = window.sessionStorage;
  let userId = sessionStorage.getItem('loginId');





            // 뒤로가기 버튼 이벤트
  const goBack = () => {
    const yesOrNo =  window.confirm("이 페이지를 벗어나시면 게시글은 저장되지않습니다. 뒤로 가시겠습니까?")
    if(yesOrNo){
      Navigate(-1)
    } 
  }


          //  DatePicker 부분입니다
    const [startDate, setStartDate] = useState(new Date());


          //  게시판 작성 value값들입니다.
    const [ inputTitle, setTitle] = useState("");
    const [ inputType, setType] = useState("춤");
    const [ inputPlace, setPlace] = useState("홍대");
    const [ inputText, setText] = useState("");
    const [ inputTeamText, setTeamText] = useState("");
    const [ inputTeamName, setTeamName] = useState("");

    const handleTitle = (e) => {
          setTitle(e.target.value);
    };

    const handleType = (e) => {
      setType(e.target.value);
    };  


    const handlePlace = (e) => {
      setPlace(e.target.value);
    };  

    const handleText = (e) => {
      setText(e.target.value);
    };  

    const handleTeamText = (e) => {
      setTeamText(e.target.value);
    };  



    const handleTeamName = (e) => {
      setTeamName(e.target.value);
    };  



    const handleClick = async(e) => {
      if(inputTitle === "" && inputTeamName === "" && inputText === ""){
        alert("작성 내용이 없어 저장된 내용 없이 이전 화면으로 돌아갑니다")
        Navigate(-1)
      } else {
        alert("저장 완료!")
        submit()
        Navigate(-1)
      }
    }

    const submit = async() => {
      let body = {
        title: inputTitle,
        type: inputType,
        date: startDate,
        place: inputPlace,
        text: inputText,
        teamText: inputTeamText,
        teamName: inputTeamName,
        id: userId
      };
      await axios({
        method : 'post',
        url: 'http://localhost:5000/Detail/create',
        data: body
      }).then((res)=>{
        console.log(res.data)
      })
    }



  return(
    <div className={styles.Body}>
      <button type="button" onClick={goBack}>뒤로가기</button>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th colSpan="3">
              <input type="text" value={inputTitle} onChange={handleTitle} placeholder='제목을 입력해주세요'/>
              </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>공연형태</td>
            <td>공연일시</td>
            <td>공연장소</td>
          </tr>
          <tr>
            <td>
              <select value={inputType} onChange={handleType}>
                <option value="춤">춤</option>
                <option value="노래">노래</option>
                <option value="밴드">밴드</option>
                <option value="연기">연기</option>
                <option value="미술">미술</option>
                <option value="마술">마술</option>
                <option value="공연예술">공연예술</option>
                <option value="행위예술">행위예술</option>
                <option value="스피치">스피치</option>
              </select>
            </td>
            <td>
            <DatePicker
            locale={ko}
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
            </td>
            <td>
            <select value={inputPlace} onChange={handlePlace}>
                <option value="홍대">홍대</option>
                <option value="대학로">대학로</option>
                <option value="신촌">신촌</option>
                <option value="한강공원">한강공원</option>
                <option value="건대">건대</option>
                <option value="해운대">해운대</option>
                <option value="서면">서면</option>
                <option value="남포동">남포동</option>
                <option value="동성로">동성로</option>
                <option value="김광석거리">김광석거리</option>
                <option value="수성못">수성못</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <input type="text" value={inputText} onChange={handleText} placeholder='공연 내용을 입력해주세요' />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input value={inputTeamText} onChange={handleTeamText}  placeholder='우리 공연팀을 소개해주세요!' />
            </td>
            <td colSpan="1">
              <input value={inputTeamName} onChange={handleTeamName} placeholder='우리 공연팀의 이름을 입력해주세요!' />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>작성 완료!</button>
    </div>
  )
}

export default Create