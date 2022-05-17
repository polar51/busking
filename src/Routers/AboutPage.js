import styles from "./AboutPage.module.css"

function AboutPage() {
  return(
    <div className={styles.Body}>
      <div className={styles.MainCont}>
        <div className={styles.SerchCont}>
          <form>
            <input type="text" name="serch"/>
            <input type="submit" value="검색" />
          </form>
        </div>
        <div className={styles.TableCont}>
        <table className={styles.Table}>
        <colgroup>
        <col width="100px" />
        <col width="500px" />
        <col width="100px" />
        <col width="100px" />
        <col width="100px" />
        </colgroup>
        <thead>
          <tr>
            <th>공연형태</th>
            <th>제목</th>
            <th>작성자</th>
            <th>일시</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>춤</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>밴드</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>춤</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>노래</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>노래</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          
        </tbody>
      </table>
        </div>
      </div>
        <button>글쓰기</button>
    </div>
  )
}


export default AboutPage;