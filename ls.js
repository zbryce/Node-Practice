const fs = require('fs')
function isLs () {fs.readdir('./','utf8',(err, files) => {
    
    if(err){
        throw err 
    } else {
        let answer = process.stdout.write('prompt> ');
        if(answer === 'ls'){
            process.stdout.write(files.join('\n'))
        } else {
            process.stdout.write('nope')
        }
        
        
        
    }
})
}
isLs()

module.exports = isLs