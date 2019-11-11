class Bin {
    constructor() {
        this.tracks = []
        // this.talks = talks
    }

    addTrack (track) {
        this.tracks.push(track)
        // this.track ++
    }

    showTracks () {
        return this.tracks
    }
}


module.exports = Bin