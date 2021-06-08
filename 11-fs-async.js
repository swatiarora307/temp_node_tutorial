const {readFile, writeFile} = require('fs')

console.log('start');
console.log('read files');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const firstFile = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const secondFile = result;
        console.log('write to file');
        writeFile('./content/result-async.txt',  `${firstFile}, ${secondFile}`, (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with the task');
        })
    })
})
console.log('starting next task');