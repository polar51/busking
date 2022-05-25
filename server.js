const express = require("express");
const app = express();
const port = 5000; 
const cors = require("cors");
const mysql = require("mysql"); 
const { func } = require("prop-types");

const connection = mysql.createConnection({
  connectTimeout : 10,
  host: "localhost",
  user: "polar51",
  password: "Kodo760386!",
  database: "busking",
});

connection.connect();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());


app.post("/Join/create", (req,res) => {
  let sql = 
'INSERT INTO login (id, pw, email, phonenumber) VALUES(?,?,?,?)';
  let params = [req.body.id, req.body.pw, req.body.email,req.body.phonenumber]
  connection.query(sql,params, function(err,rows,fields) {
    if(err){
      console.log(err);
    } else{
      console.log("Create User!")
    }
  })
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});