import styles from "./Detail.module.css"


function DataPage() {
  return(
    <div className={styles.Body}>
      <button type="button">뒤로가기</button>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th colSpan="3">제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>공연형태</td>
            <td>공연일시</td>
            <td>공연장소</td>
          </tr>
          <tr>
            <td>노래</td>
            <td>2022-05-19</td>
            <td>홍대</td>
          </tr>
          <tr>
            <td colSpan="3">내용</td>
          </tr>
          <tr>
            <td colSpan="3">공연 팀 설명</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default DataPage;