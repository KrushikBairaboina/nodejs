// const {readFileSync,writeFileSync} = require('fs');
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// console.log(first, second)
// writeFileSync(
//     './content/write.txt',
//     `results of 2  texts ${first},${second}`,{flag:'a'}
// )
const { readFile, writeFile } = require('fs')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        }
        const second = result;
        writeFile('./content/new.txt',
        `results of 2  texts ${first},${second}`
        ,(err,result)=>{
          if(err){
            console.log(err)
            return
          }
          console.log(result)
        })
    })
   
}
)