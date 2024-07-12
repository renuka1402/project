const express=require("express");
const cors=require("cors");
const app= express();
const payment=require("./router/paymentrout")
app.use(cors());
app.use(express.json());
app.use("/",payment);
const POST=3002
app.listen(POST,()=>{
    console.log("server")
})