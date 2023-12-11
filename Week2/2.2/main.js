const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
// app.use(bodyParser.json());
let todo = [];

app.get("/",(req,res)=>{
    res.json({"message":"everything working"})
})

app.post("/greet" , (req,res)=>{
    let a  = Number(` ${req.body.a}`)
    let b = Number(`${req.body.b}`)
    
    res.json({"message": a + b})
})

const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`server running on port no ${PORT}`);
})