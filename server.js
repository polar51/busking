const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // << 새로 추가된 부분

const connection = mysql.createConnection({
  connectTimeout : 10,
  host: "localhost",
  user: "polar51",
  password: "Kodo760386!",
  database: "busking",
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/text", (req,res) => {
  const user_id = req.body.param;
  console.log(user_id);
  connection.query('select * from login',(err,result)=>{
    if(err){
      console.log("DB저장 실패");
    } else {
      console.log("DB저장 성공")
    }
  })
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});