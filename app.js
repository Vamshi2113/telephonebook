const express= require("express");
const app=express();
const path=require("path")
const port=80;
const mongoose=require('mongoose')



app.use("/static",express.static('static'));

app.set("view engine","pug");
app.set('views',path.join(__dirname,'views'));



main().catch(err => console.log(err)
);
async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect('mongodb+srv://vamshi:Vv72177217@cluster0.9cfah0p.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true
  });
  console.log("connected");
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
var db=mongoose.connection;
db.once('open',function(){
  console.log("connected...................;;");
})





var phoneschema = new mongoose.Schema({
    name: String, 
    phone:String
  });
  
var phonemodel = mongoose.model('phone',phoneschema);
  








app.get("/",(req,res)=>{
    res.render("home.pug");
})

app.get("/home",async(req,res)=>{
    console.log("recieved home.get")

    let data= await phonemodel.find({},{});
    console.log("data=",data)
    let params={numbers:data};

    res.render("dashboard.pug",params)

})

app.use(express.json());
app.use(express.urlencoded());
app.post("/save_number",async (req,res)=>{
    var form_data={name:req.body.NAME,phone:req.body["MOBILE NUMBER"]};
    console.log(form_data)

    var phonedata = new phonemodel(form_data);   
    console.log("phn model==>",phonemodel,"===end===")
    await phonedata.save();
    res.redirect("/home")
})



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})