import React, { useState, useEffect } from 'react';
import styles from "./LoginPage.module.css"
import { Link } from 'react-router-dom';
import axios from 'axios';



function LoginPage() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleLogin = () => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/LoginAF',
            data: {
                id: inputId,
                pwd: inputPw
            }
        })
    }



	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    return(
    <div className={styles.Body}>
        <h2 className={styles.title}>Login</h2>
            <div className={styles.Id}>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div className={styles.Pw}>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div className={styles.btn}>
                <button type='button' onClick={handleLogin}>Login</button>
                <Link to="/Join"><button type='button'>Join</button></Link>
            </div>
    </div>
    )
}


export default LoginPage;