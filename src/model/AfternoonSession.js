// An Afternoon session subclass represents a class that inherits its methods from the Session superclass

// Comes from   : A Track 
// Comprises of : 1 or more Talks

const Session = require('./Session')

class AfternoonSession extends Session{
    constructor(slot) {
        super()
        this.slot = slot;
        this.talks = []
        this.startTime = {
            hr: 12,
            min: 0,
            ampm: "PM"
        }
    }
}

module.exports = AfternoonSession
