console.log('index.js is running!')
const input = require('./test.js')
const ConferenceManager = require('./exec/ConferenceManager')

////////////////////////////////////
//              INTRO
///////////////////////////////////

/*
@ Main x1
@ Conference x1
    Properties
        CurrentTrack
        Currentsession
    startSort
    Check session
    Checktrack
@ Track (day1 / day2) x1
@ Session (morn/aft/lunch/network) x5
    Properties
        New Talk
        Start time
    Check talk
    Place talk in session
@ Talk (scheduled talk / event / break) x4
    Properties
        Id
        Title
        Duration
    getID
    GetTitle
    Get druation
@ Binpacker class
    Bin class
*/

let manager = new ConferenceManager(input)
let conf = manager.schedule(manager.parseStringData())
// manager.showConference(conf)

////////////////////////////////////
//      TERMINAL SECTION         
///////////////////////////////////

const readline = require('readline');


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
    
//     const ans = await askQuestion(`
// -----------------------------
// What would you like to do?
// 1. Show given input
// 2. Run Schedule Manager
// 3. End program
// -----------------------------
// `);
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

showOptions();

// let showOptions = () => {
//     console.log(`What would you like to do? \n\n1. Run Schedule Manager\n2. See sorted schedule \n`);
// }
// let input1 = parseInt(process.argv[2])
// // let programIsRunning = true
// // while (programIsRunning) {
//     switch(input1) {
//         case 1:
//             console.log('input here!')
//             manager.showConference(conf)
//             break;
//         case 2:
//             // console.log('schedule here!')
//             break;
//         default:
//             showOptions();
//             break;
//     }
// }


//////////////////
// END
/////////////////