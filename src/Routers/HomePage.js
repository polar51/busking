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
        </colgroup>
        <thead>
          <tr>
            <th>공연형태</th>
            <th>제목</th>
            <th>작성자</th>
            <th>일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>춤</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>밴드</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>춤</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>노래</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>노래</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          
        </tbody>
      </table>
      <table className={styles.Table}>
        <colgroup>
        <col width="100px" />
        <col width="500px" />
        <col width="100px" />
        <col width="100px" />
        </colgroup>
        <thead>
          <tr>
            <th>공연형태</th>
            <th>제목</th>
            <th>작성자</th>
            <th>일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>마술</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>뮤지컬</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>연기</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>행위예술</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          <tr>
            <td>무용</td>
            <td>예시</td>
            <td>익명</td>
            <td>2022-05-11</td>
          </tr>
          
        </tbody>
      </table>
      <div className={styles.Video}>
                <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/jMUYtK7Vozg'}    
                    width='400px'         
                    height='500px'       
                    playing={true}        
                    muted={true}          
                    controls={true}     
                    light={false}         
                    pip={true}            
                    poster={'https://youtu.be/jMUYtK7Vozg'}
                />
            </div>
    </div>
  )
}

export default HomePage