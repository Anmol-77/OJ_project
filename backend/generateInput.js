const fs=require('fs');
const path=require('path')
const {v4}=require('uuid')


const dirname=path.join(__dirname,'Input');

if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname,{recursive:true});
}

const generateInput=async(input)=>{
    const uuid=v4();
    const filename=`${uuid}.txt`;
    const filepath=path.join(dirname,filename);

    fs.writeFileSync(filepath,input);
    return filepath;
}

module.exports={
    generateInput
}