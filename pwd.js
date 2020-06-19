const allow = require('fs')
function pathFunc (){ process.stdin.on('data' , (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
    process.stdout.write(process.cwd()) ;
    process.stdout.write('\nprompt > ') ;
    } else {
    process.stdout.write('write pwd instead')
    }
}) 
}

module.exports = pathFunc