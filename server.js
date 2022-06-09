const express = require("express");
const app = express();
const port = 5000; 
const cors = require("cors");
const mysql = require("mysql"); 
const cookieParser = require('cookie-parser')


app.use(
  cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true })
);

const connection = mysql.createConnection({
  connectTimeout : 10,
  host: "localhost",
  user: "polar51",
  password: "Kodo760386!",
  database: "busking",
  dateStrings: 'date'
});

connection.connect();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());


app.put('/getData', (req, res)=>{
  let params = req.body.num
  let sql = `SELECT * from board WHERE num = ${params}`;
  connection.query(sql, function(err, data){
    if(err){
      console.log(err)
      res.send(err);
    } else{
      console.log(data)
      res.send(data)
    }
  })
})


app.get("/allList", (req,res)=> {
  let sql = "SELECT * FROM board";
  connection.query(sql, (err, data)=>{
    if(err){
      console.log(err)
      res.send(err)
    } else {
      res.send(data)
    }
  });
});

app.get("/musicList", (req,res)=> {
  let sql = 'SELECT * FROM board WHERE type="춤"or type="노래" or type="밴드"';
  connection.query(sql, (err, data)=>{
    if(err){
      console.log(err)
      res.send(err)
    } else {
      res.send(data)
    }
  });
});

app.get("/artList", (req,res)=> {
  let sql = 'SELECT * FROM board WHERE type="연기" or type="미술" or type="마술" or type="공연예술" or type="행위예술" or type="스피치"';
  connection.query(sql, (err, data)=>{
    if(err){
      console.log(err)
      res.send(err)
    } else {
      res.send(data)
    }
  });
});


app.post("/About/serch", (req, res) => {
  let sql = 'SELECT * FROM board WHERE '+req.body.select +' Like' + connection.escape('%'+req.body.serchKeyword+'%')
  connection.query(sql, (err, rows)=> {
    if(err){
      console.log(err)
    } else {
      res.send(rows)
    }
  })
})


app.post('/Detail/delete', (req, res) => {
  let sql = 'DELETE FROM board WHERE num=?'
  let params = req.body.num;
  connection.query(sql, params, (err)=>{
    if(err){
      console.log(err)
    }
  })
})

app.post("/Detail/update", (req, res) => {
  let sql = 'UPDATE board SET title=?,type=?,date=?,place=?,text=?,teamName=?,teamText=? WHERE num=?'
  let params = [req.body.title, req.body.type, req.body.date, req.body.place, req.body.text, req.body.teamName, req.body.teamText, req.body.num]
  connection.query(sql, params, (err, rows, fields)=> {
    if(err){
      console.log(err)
    }
  })
})

app.post("/Detail/create", (req,res) => {
  let sql = 'INSERT INTO board (title, type, date, place, text, teamName, teamText, id) VALUES(?,?,?,?,?,?,?,?)';
  let params = [req.body.title, req.body.type, req.body.date, req.body.place, req.body.text, req.body.teamName, req.body.teamText, req.body.id]
  connection.query(sql, params, function(err, rows, fields){
    if(err){
      console.log(err)
    }
  })
})



app.post('/Join/checkid', (req, res) => {
  let sql = `select id from login where id=?`;
  let userId = req.body.id;
  connection.query(sql, [userId], (err, rows, fields)=> {
    if( rows === undefined){
      res.send(rows)
    } else {
      res.send(rows)
    }
  })
})



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





// 로그인 부분



app.post("/Login/login", (req, res)=> {
  let sql = `SELECT * FROM login WHERE id=? AND pw=?`;
  let params = [req.body.id, req.body.pw]
  connection.query(sql, params, (err, rows, fields)=> {
    if(err){
      console.log(err)
    } else {
      res.send(rows)
    }
  })
})



app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});