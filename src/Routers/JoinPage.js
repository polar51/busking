import React, { useState, useEffect } from 'react';
import styles from "./JoinPage.module.css"
import axios from 'axios';



function JoinPage() {
  const [Selected, setSelected] = useState("naver.com");
  const handleChangeSelect = (e) =>{
    setSelected(e.target.value);
  };


  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputEmailId, setInputEmailId] = useState('')
  const [inputEmailDomain, setInputEmailDomain] = useState('')
  const [inputPNumber, setInputPNumber] = useState('')

    const handleInputId = (e) => {
      setInputId(e.target.value)
  };

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    };

  //   const handleInputEmail = (e) => {
  //     if(Selected ==="직접입력"){

  //     }
  // };
    const handleInputEmailId = (e) => {
      setInputEmailId(e.target.value + "@")
    }
    const handleInputEmailDomain = (e) => {
      setInputEmailDomain(e.target.value)
    }
    const handleInputPNumber = (e) => {
        setInputPNumber(e.target.value)
    };

  
  const handleClick = async() => {
    let Email = () => {
      if(Selected === "직접입력") {
        setInputEmail(inputEmailId+inputEmailDomain)
      } else {
        setInputEmail(inputEmailId+Selected)
      }
    } 
    // body와 Email이 비동기로 발생하기때문에 이메일이 Null값인채 보내짐
    let body = {
      id : inputId,
      pw : inputPw,
      email : Email,
      phonenumber : inputPNumber
    };
    await axios({
      method : 'post',
      url: 'http://localhost:5000/Join/create',
      data: body
    }).then((res)=>{
      console.log(res.data)
    })
  };
  return(
    <div className={styles.Body}>
      <h2 className={styles.Title}>Join</h2>
        <div className={styles.Id}>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
          <button type="button">중복검사</button>
        </div>
        <div className={styles.Pw} >
          <label htmlFor='input_PW' >PW : </label>
          <input type='password' name='input_PW' value={inputPw} onChange={handleInputPw} />
        </div>
        <div className={styles.Email}>
          <label htmlFor='input_Email'>Email : </label>
          <input type='email' name='input_Email' onChange={handleInputEmailId} />
          <label htmlFor="input_EmailSelect"> @ </label>
          <span>{ Selected === "직접입력" ? <input type="text" name="input_EmailSelect" onChange={handleInputEmailDomain} /> : null }</span>
          <input type="text"  value={Selected} readOnly />
          <select  name="selectEmail" onChange={handleChangeSelect} defaultValue="naver.com"> 
          <option value="직접입력">직접입력</option> 
          <option value="naver.com" key="naver.com">naver.com</option> 
          <option value="hanmail.net" key="hanmail.net">hanmail.net</option> 
          <option value="nate.com" key="nate.com">nate.com</option> <option value="yahoo.co.kr" key="yahoo.co.kr">yahoo.co.kr</option> 
          <option value="gmail.com" key="gmail.com">gmail.com</option> 
          </select>
        </div>
        <div className={styles.PhoneNumber}>
          <label htmlFor='input_PhoneNumber'>Phone Number : </label>
          <input type="number" name='input_PhoneNumber' placeholder='-를 제외한 숫자만 입력해주세요'onChange={handleInputPNumber}  />
        </div>
        <div className={styles.btn}>
          <button type='button'>수정</button>
          <button type='button' onClick={handleClick}>가입</button>
        </div>
    </div>
  )
}



export default JoinPage;