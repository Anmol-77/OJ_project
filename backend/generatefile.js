const fs=require('fs');
const path=require('path')
const {v4}=require('uuid')


const dirname=path.join(__dirname,'code');

if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname,{recursive:true});
}

const generateFile=async(language,code)=>{
    const uuid=v4();
    const filename=`${uuid}.${language}`;
    const filepath=path.join(dirname,filename);

    fs.writeFileSync(filepath,code);
    return filepath;
}

module.exports={
    generateFile
}