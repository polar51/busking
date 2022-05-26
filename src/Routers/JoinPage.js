import React, { useState } from 'react';
import styles from "./JoinPage.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom';



function JoinPage() {
  const [Selected, setSelected] = useState("naver.com");
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const [inputPNumber, setInputPNumber] = useState('')
  const [inputEmailId, setInputEmailId] = useState('')
  const [inputEmailDomain, setInputEmailDomain] = useState('')
  const [inputEmail, setInputEmail] = useState('')


  const [inputIdError, setInputIdError] = useState(false)
  const [inputPwError, setInputPwError] = useState(false)
  
  
  
  const handleInputId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (userIdRegex.test(e.target.value)) {setInputIdError(false);}
        else {setInputIdError(true)
        setInputId(e.target.value);}
  };
  
  const handleInputPw = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (passwordRegex.test(e.target.value)) {setInputPwError(false);}
        else {setInputPwError(true)
        setInputPw(e.target.value);}
  };
  
  const handleInputEmailId = (e) => {
    setInputEmailId(e.target.value + "@")
    if(Selected === "직접입력") {
      setInputEmail(inputEmailId+inputEmailDomain)
    } else {
      setInputEmail(inputEmailId+Selected)
    }
    
  }
  const handleInputEmailDomain = (e) => {
    setInputEmailDomain(e.target.value)
    if(Selected === "직접입력") {
      setInputEmail(inputEmailId+inputEmailDomain)
    } else {
      setInputEmail(inputEmailId+Selected)
    }
    
  }
  const handleChangeSelect = (e) =>{
    setSelected(e.target.value);
    if(Selected === "직접입력") {
      setInputEmail(inputEmailId+inputEmailDomain)
    } else {
      setInputEmail(inputEmailId+Selected)
    }
  
  };

    const handleInputPNumber = (e) => {
        setInputPNumber(e.target.value)
    };

  



  const validation = () => {
    if(!inputIdError) setInputIdError(true);
    if(!inputPwError) setInputPwError(true);

    if(inputIdError && inputPwError) return true;
    else return false;
}

  const handleClick = async(e) => {
    if(validation()) {
      let body = {
        id : inputId,
        pw : inputPw,
        email : inputEmail,
        phonenumber : inputPNumber
      };
      await axios({
        method : 'post',
        url: 'http://localhost:5000/Join/create',
        data: body
      }).then((res)=>{
        console.log(res.data)
      })
    } else {
      alert("아이디와 비밀번호를 확인해주세요!")
      e.preventDefault()
    }
    }
  
  return(
    <div className={styles.Body}>
      <h2 className={styles.Title}>Join</h2>
        <div className={styles.Id}>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
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
          <input type="tel" name='input_PhoneNumber' placeholder='-를 제외한 숫자만 입력해주세요'onChange={handleInputPNumber} maxLength="12" />
        </div>
        <div className={styles.btn}>
          <Link to="/Login"><button type='button' onClick={handleClick}>가입</button></Link>
        </div>
    </div>
  )
}



export default JoinPage;