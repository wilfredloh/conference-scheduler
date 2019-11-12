// A Track class represents one full day / track within a conference and comprises of 1 or more Sessions.

class Track {
    constructor(talks) {
        this.session = []
    }

    addSession(bin) {
        this.session.push(bin)
    }
}

module.exports = Track
