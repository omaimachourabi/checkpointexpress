const express = require('express')
const app = express()
const port = 5000


// const userouter = require("./routes/route")
// app.use("/",userouter)

let currentDate = new Date()
reqTime = (req,res,next) => {
    console.log(req.originalURL, currentDate.getDay())
    if (
        currentDate.getHours() > 9 && currentDate.getHours() < 17
        ) 
        next()
}




app.use(express.static("pages"))
app.listen( 5000, (err)=>{
    err ? console.log(err) : console.log('the server is running on port 5000')
})