import fs from "fs";
// export function sum(a, v) {
//     return Number(a) + Number(v)
// }


// fs.readFile('sample.txt', (error, data)=>{
//    if(error) console.log(error)

//    else{
//     console.log(data.toString())
// }
// })

                                                     
fs.writeFile('call.txt' ,  'data' ,(error)=>{
    if(error) console.log(error)
})

fs.readFile('call.txt' ,(err,datas)=>{
  if(err) console.log(err)
   else{
      console.log(datas.toString())
 }
})      


