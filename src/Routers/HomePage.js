import ReactPlayer from 'react-player/lazy';
import styles from "./HomePage.module.css"

function HomePage() {
  return(
    <div className={styles.Body}>
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
            <td>마술</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>뮤지컬</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>연기</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>행위예술</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          <tr>
            <td>무용</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
            <td>132</td>
          </tr>
          
        </tbody>
      </table>
      <div className={styles.Video}>
                <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/jMUYtK7Vozg'}    // 플레이어 url
                    width='400px'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://youtu.be/jMUYtK7Vozg'}
                />
            </div>
    </div>
  )
}

export default HomePage