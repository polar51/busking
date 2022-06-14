import { Spinner } from "react-bootstrap"
import styles from "./Loading.module.css"





const Loading = () => {
  return(
    <div className={styles.body}>
      <Spinner animation="border" role="status" variant="light" className={styles.Loading}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}


export default Loading