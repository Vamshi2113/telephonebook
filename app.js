const express= require("express");
const app=express();
const path=require("path")
const port=80;




app.use("/static",express.static('static'));

app.set("view engine","pug");
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.render("home.pug");
})

app.get("/home",(req,res)=>{
    console.log("recieved home.get")
    res.render("dashboard.pug")

})
app.post("/home",(req,res)=>{
    console.log("recieved")
    res.render("dashboard.pug")

})

app.use(express.json());
app.use(express.urlencoded());
app.post("/save_number",(req,res)=>{
    var form_data=req.body;
    console.log(form_data);
})








app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})