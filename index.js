const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf-8', (error, result)=>{
    if(error)
        return
    const first = result;
    readFile('./content/second.txt','utf-8', (error, result)=>{
        if(error)
            return
        const second = result;
        writeFile(
            './content/third.txt',
            `Hi this is ${first} ${second} \n\n`,
            (error, result)=>{
                if(error)
                    return;
                console.log(result);
            }
        )
    })
})