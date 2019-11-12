let input = require('./src/input.js')
const readline = require('readline');
const ConferenceManager = require('./src/exec/ConferenceManager')

////////////////////////////////////
//        TERMINAL OUTPUT         
///////////////////////////////////

async function showOptions () {
    function askQuestion(query) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }
    
    const ans = await askQuestion(
        "-----------------------------\n" +
        "What would you like to do?\n\n" +  
        "1. Show given input\n" + 
        "2. Run Schedule Manager\n" + 
        "3. End program\n" + 
        "-----------------------------\n"
    )
    switch(parseInt(ans)) {
        case 1:
            console.log(input)
            showOptions();
            break;
        case 2:
            manager.showConference(conf)
            showOptions();
            break;
        case 3:
            // end program
            break;
        default:
            showOptions();
            break;
    }
}

////////////////////////////////////
//        INITIALIZE PROGRAM
///////////////////////////////////

let manager = new ConferenceManager(input)
let conf = manager.schedule(manager.parseStringData())
showOptions();