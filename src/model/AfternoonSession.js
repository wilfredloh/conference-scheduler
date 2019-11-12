// An Afternoon session subclass represents a class that inherits its methods from the Session superclass

// Comes from   : A Track 
// Comprises of : 1 or more Talks

const Session = require('./Session')

class AfternoonSession extends Session{
    constructor(slot) {
        super()
        this.slot = slot
        this.talks = []
        this.startTime = {
            hr: 1,
            min: 0,
            ampm: "PM"
        }
    }

    getLunchTime () {
        console.log(`12:00 PM Lunch Break`)
    }

    getNetworkTime () {
        let time = this.startTime
        if (time.hr === 4 && time.min > 0) {
            console.log(`04:${this.formatTime(time.min)} PM Networking`)
        } else if (time.hr === 5) {
            console.log(`05:00 PM Networking`)
        } else {
            console.log(`04:00 PM Networking`)
        }
    }
}

module.exports = AfternoonSession
