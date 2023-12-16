const express = require('express');

const app = express();
app.use(express.json());

let users = [{
    name : "alok",
    kidneys : [
        {
            healthy : false
        }
    ]
}];

app.get("/",(req,res)=>{
    const kidney = users[0].kidneys;
    const numberOfKidneys = kidney.length;
    const healthyKidney = kidney.filter((e)=>{
        return e.healthy == true;
    })
    const numberOfHealthyKidneys = healthyKidney.length;
    res
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys

    })
})


app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.status(200).json({
        "message" : `Kidney added successfully`
    })
})


app.put("/", (req, res) => {
    users.forEach((user) => {
        user.kidneys.forEach((kidney) => {
            kidney.healthy = true;
        });
    });

    
    res.status(200).json({
        "message": "all kidneys are now healthy"
    });
});



app.delete("/",(req,res)=>{
    let healthyKidneys = users[0].kidneys.filter((kidney) => {
        return kidney.healthy === true;
    });
    
    users[0].kidneys = healthyKidneys;
    
    res.status(200).json({
        "message": "all kidneys are now healthy"
    });
    
})




const PORT = 4000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port number ${PORT}`)
})