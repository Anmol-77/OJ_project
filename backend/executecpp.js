const fs=require("fs")
const path=require("path")
const {exec}=require("child_process");
// const { stderr } = require("process");
// const { error } = require("console");


const outpupath=path.join(__dirname,'exe');

if(!fs.existsSync(outpupath)){
    fs.mkdirSync(outpupath,{recursive:true});
}

const executecpp=async(filepath,inputpath)=>{
    const outputId=path.basename(filepath).split(".")[0];

    const outputname= `${outputId}.exe`;
    const outputfile=path.join(outpupath,outputname);
    
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filepath} -o ${outputfile} && cd ${outpupath} && .\\${outputname} < ${inputpath}`,
            (error,stdout,stderr)=>{
            if(error){
                reject({error,stderr});
            }
            if(stderr){
                reject(stderr);
            }
            resolve(stdout);
        })
    });
}

module.exports=executecpp;