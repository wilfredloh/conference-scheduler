// A Session class represents one session within a Track and comprises of 1 or more Talks.

class Session {
    constructor(slot) {
        this.slot = slot;
        this.talks = []
    }
}

module.exports = Session
