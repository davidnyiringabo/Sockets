const express = require("express");
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({path: "../config.env"})
const PORT = process.env.PORT||3000

const publicPath = path.join(__dirname+'/../public')
const app = express()
app.use(express.static(publicPath))

app.get("/",(req,res)=>{
    res.sendFile("index.html")
})

app.listen(PORT,()=>{
    console.log("The server is running at port http://localhost:"+PORT)
})