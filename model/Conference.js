
// A Conference class represents one full conference event.

// > Conference 
//         > Track 
//             > Session
//                 > Talk 


class Conference {
    constructor() {
        this.tracks = []
    }

    addTrack (track) {
        this.tracks.push(track)
    }

    showTracks () {
        return this.tracks
    }
}

module.exports = Conference
