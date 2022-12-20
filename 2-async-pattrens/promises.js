const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)





const start = async()=>{
   try {
    const first = await readFile('./../content/first.txt')
    const second = await readFile('./../content/second.txt')
await writeFile('./../content/fileFromPromiss.txt',`${first} + ${second} -- this is added from promis mind granade`)
   } catch (error) {
    console.log(error);
   }
}
start()




// const readFile = (path)=>{
//     return new Promise((res,rej)=>{
//         fs.readFile(path,"utf-8",(err,data)=>{
//             if(err){rej(err)}
//             else { res(data)}
//         })
//     })
// }


// readFile('./../content/first.txt')
// .then((data1)=>{
//    readFile('./../content/second.txt')
//    .then((data2)=>{
//     fs.writeFile('./../content/fileFromPromiss.txt',`${data1} + ${data2} -- this is added from promis`,(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else
//         console.log(data);
//     })

//    }).catch(err=>{
//     console.log(err);
// })
// })
// .catch(err=>{
//     console.log(err);
// })