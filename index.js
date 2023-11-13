const express= require("express");
const app=express();

// console.dir(app);

let port =3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log(req);
//     console.log("Request received");
//     res.send("this is a basic response");
// });

/////Routs////

app.get("/",(req,res)=>{
    res.send("hello,You contacted to the root path");
})

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
})

app.get("/mango",(req,res)=>{
    res.send("you contacted mango path");
})

app.get("*",(req,res)=>{
    res.send("this path does not exist");
})

app.post("/",(req,res)=>{
    res.send("you send a post request");
})

