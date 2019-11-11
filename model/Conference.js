
// > Conference (2 tracks - Day 1 & 2)
//         > Track (Day - 2 sessions 180/240)
//             > Session (Morn/Aft/Break/Network)
//                 > Talk (Title, Duration)

// A Conference class represents one full conference event.

class Conference {
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


module.exports = Conference
