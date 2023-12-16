const express = require('express');

const app = express();

app.get("/add" , (req,res)=>{

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let c = (a + b);
    res.status(200).json({
        message : c
    })
})

app.get("/" , (req,res)=>{

    
    res.status(200).json({
        message : "hello world"
    })
})

const PORT = 4000
app.listen(PORT , ()=>{
    console.log(`Server running on port no ${PORT}`)
})