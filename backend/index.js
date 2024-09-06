const express=require("express");
const { generateFile } = require("./generatefile");
const executecpp = require("./executecpp");
const cors  = require('cors');
const { generateInput } = require("./generateInput");
const Dbconnection=require("./database/db_problem");
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

Dbconnection();


const port=9000;

app.use("/api/problem",require('./router/problem'))

app.get("/",(req,res)=>{
    res.send("Compiler")
})

app.post("/run",async(req,res)=>{
    const {language='cpp',code,input}=req.body;


    if(code===undefined){
        return res.status(500).json({"success":false ,message:"empty code body"})
    }
    try{

        const filePath= await generateFile(language,code);
        const Input= await generateInput(input);
        const output=await executecpp(filePath,Input);
        return res.json(output);

    }
    catch(err){
        return res.status(500).json({"success":false , "message":err})
    }

    res.json({language,code});
})

app.listen(port,()=>{
    try{
    console.log("Server is litsening at port 9000")
    }
    catch(err){
        console.log(err)
    }
})