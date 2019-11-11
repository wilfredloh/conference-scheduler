// A Talk class represents one talk within a Session.

class Talk {
    constructor(id, title, duration) {
        this.id = id
        this.title = title
        this.duration = duration
    }

    getId () {
        return this.id
    }
    
    getTitle () {
        return this.title
    }
    
    getDuration () {
        return this.duration
    }
}

module.exports = Talk
