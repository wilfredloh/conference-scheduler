// A Track class represents one full day / track within a conference and comprises of 1 or more Sessions.

class Track {
    constructor() {
        this.session = []
        this.day = 0
    }

    addSession(bin) {
        this.session.push(bin)
    }

    getCurrentDay(day) {
        this.day = day
        console.log(`DAY: ${this.day}`)
    }
}

module.exports = Track
