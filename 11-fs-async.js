const {readFile , writeFile}= require('fs')

readFile('./content/first.txt', 'utf-8',(err,result)=>{
    if(err){
    console.log(err);
        return 
    }
    const first =  result
    readFile('./content/second.txt', 'utf-8',(err,result)=>{
        if(err){
        console.log(err);
            return 
        }
        const second =  result
        writeFile('./content/result2.txt',`Heer is the result ${first} and1 ${second}`,(err,result)=>{
            if(err) return
            console.log(result);
        })
        // console.log(second);
    })})

