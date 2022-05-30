import * as React from 'react'
import { useLocation } from "react-router";
import styles from "./Detail.module.css"
import axios from 'axios';



function Detail() {
  const { state } = useLocation();
  

  return(
    <div className={styles.Body}>
      <button type="button">뒤로가기</button>
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
    </div>
  )
};

export default Detail;