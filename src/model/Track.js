// A Track class represents one full day / track within a conference and comprises of 1 or more Sessions.
const AfternoonSession = require('./AfternoonSession')

class Track {
    constructor() {
        this.session = []
        this.day = 0
    }

    addSession(bin) {
        bin ? this.session.push(bin) : this.session.push(new AfternoonSession(240))
    }

    getCurrentDay(day) {
        this.day = day
        console.log(`DAY: ${this.day}`)
    }
}

module.exports = Track
