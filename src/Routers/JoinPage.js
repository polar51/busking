import styles from "./JoinPage.module.css"



function JoinPage() {
  return(
    <div className={styles.Body}>
      <h2 className={styles.Title}>Join</h2>
        <div className={styles.Id}>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id'/>
          <button type="button">중복검사</button>
        </div>
        <div className={styles.Pw}>
          <label htmlFor='input_PW'>PW : </label>
          <input type='password' name='input_PW' />
        </div>
        <div className={styles.Email}>
          <label htmlFor='input_Email'>Email : </label>
          <input type='email' name='input_Email' />
          <label htmlFor="input_EmailSelect"> @ </label>
          <input type="text" name="input_EmailSelect" disabled value="naver.com" />
          <select name="selectEmail"> 
          <option value="1">직접입력</option> 
          <option value="naver.com" selected>naver.com</option> 
          <option value="hanmail.net">hanmail.net</option> 
          <option value="nate.com">nate.com</option> <option value="yahoo.co.kr">yahoo.co.kr</option> 
          <option value="gmail.com">gmail.com</option> 
          </select>
        </div>
        <div className={styles.PhoneNumber}>
          <label htmlFor='input_PhoneNumber'>Phone Number : </label>
          <input type="text" name='input_PhoneNumber' />
        </div>
        <div className={styles.btn}>
          <button type='button'>수정</button>
          <button type='button'>가입</button>
        </div>
    </div>
  )
}



export default JoinPage;