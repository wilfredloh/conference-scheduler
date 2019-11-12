// A Morning session subclass represents a class that inherits its methods from the Session superclass

// Comes from   : A Track 
// Comprises of : 1 or more Talks

const Session = require('./Session')

class MorningSession extends Session {
    constructor(slot) {
        super()
        this.slot = slot;
        this.talks = []
        this.startTime = {
            hr: 9,
            min: 0,
            ampm: "AM"
        }
    }
}

module.exports = MorningSession
