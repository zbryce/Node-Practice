let fnc = require('./pwd')
let fnc2 = require('./ls')
// function commands (data){

//     if(entry === 'pwd'){
//         fnc()
//     }
//     if(entry === 'ls'){
//         fnc2()
//     }
// }

process.stdout.write('prompt> ')
process.stdin.on('data', data => {
    const entry = data.toString().trim()
   
    if(entry === 'pwd'){
        fnc(entry)
    }
    if(entry === 'ls'){
        fnc2()
    }
    // process.stdout.write(entry)
})

// commands(response)


