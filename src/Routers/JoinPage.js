import React, { useState, useEffect } from 'react';
import styles from "./JoinPage.module.css"



function JoinPage() {
  const [Selected, setSelected] = useState("naver.com");
  const [Close, setClose] = useState("1");
  const handleChangeSelect = (e) =>{
    setSelected(e.target.value);
    if(Selected === "직접입력"){
      setClose(0)
    }
    if(Selected !== "직접입력"){
      setClose(1)
    }
  };


  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
      setInputId(e.target.value)
  }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

  const handleClick = (e) => {
    const param = {
      id : inputId,
      pw : inputPw
    }
    fetch("http://localhost:3001/text", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          text: json.text,
        });
      });
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
          <input type='email' name='input_Email' />
          <label htmlFor="input_EmailSelect"> @ </label>
          <input type="text" name="input_EmailSelect" disabled={Close} />
          <input type="text"  defaultValue={Selected} />
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
          <input type="text" name='input_PhoneNumber' />
        </div>
        <div className={styles.btn}>
          <button type='button'>수정</button>
          <button type='button' onClick={handleClick}>가입</button>
        </div>
    </div>
  )
}



export default JoinPage;