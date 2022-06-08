import React, { useState, useEffect } from 'react';
import styles from "./LoginPage.module.css"
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';




function LoginPage() {
    let sessionStorage = window.sessionStorage;
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const navigate = useNavigate()

    const handleLogin = async() => {
        let body = {
            id : inputId,
            pw : inputPw
        }
        await axios({
            method: 'post',
            url: 'http://localhost:5000/Login/login',
            data: body
        }).then((rows) => {
            if(rows.data.length === 0) {
                alert("아이디와 비밀번호를 확인해주세요")
            } else {
                sessionStorage.setItem("loginId", rows.data[0].id);
                navigate('/busking')
            }
        })
    }

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
                <input type='text' name='username' value={inputId} onChange={handleInputId} />
            </div>
            <div className={styles.Pw}>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='password' value={inputPw} onChange={handleInputPw} />
            </div>
            <div className={styles.btn}>
                <button type='button' onClick={handleLogin}>Login</button>
                <Link to="/Join"><button type='button'>Join</button></Link>
            </div>
    </div>
    )
}


export default LoginPage;