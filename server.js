const express =require("express");

const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/cal.html")
})
app.post("/",(req,res)=>{
    var num1=Number( req.body.number1);
    var num2=Number( req.body.number2);
    var sum=num1+num2;
    res.send(sum)

})


app.listen(2000,function(){
    console.log("Server started ... ");

})