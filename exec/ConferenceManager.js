// The ConferenceManager class creates a class instance that manages / stores all tracks and schedules / displays conference news based on specified functions.

const BinPacker = require('./BinPacker')
const Conference = require('../model/Conference')
const Talk = require('../model/Talk')
const Track = require('../model/Track')

class ConferenceManager {
    constructor(input) {
        this.input = input
        this.conference = []
    }

    // create a new conference and sort tracks accordingly
    // stores all data in a Conference instance
    schedule (talks) {
        let conference = new Conference()

        // place all talks into the bin packer
        let binStore = new BinPacker(talks)
        
        // create and sort talks using firstFit function
        let bins = binStore.firstFit()
        
        // for every 2 binStore, create a new track
        for (let i=0; i<bins.length; i+=2) {
            let track = new Track()
            track.addSession(bins[i])
            track.addSession(bins[i+1])
            conference.addTrack(track)
        }
        return conference
    }


    // shows all conference details (time/day/title)
    showConference (conf) {
        
        // loop through all tracks of the conference
        conf.tracks.forEach((tracks, i) => {
            console.log('DAY: ', i+1)

        // loop through all sessions of a track
            tracks.session.forEach( (sessions,i) => {

                // if session = 2 (afternoon session) set talk to be lunch break
                if (i === 1) sessions.getTalkTime('Lunch Break')
                sessions.talks.forEach(talks => {
                    sessions.getTalkTime(talks.title)
                    sessions.addTime(talks.duration)
                });

                // if session = 2 (afternoon session) set talk to be networking session
                if (i === 1) sessions.getTalkTime('Networking')
            });
        });
    }

    // parses input data from user
    parseStringData () {
        let input = this.input.match(/[^\r\n]+/g)
        let id = 0
        let talks = []

        for (let i=0; i<input.length; i++) {
            let talk = input[i].split(' ')
            let duration = talk.splice(-1,1).pop()
            duration = duration === 'lightning' ? 5 : parseInt(duration)
            let title = talk.join(' ')
            talks.push(new Talk(id, title, duration))
            id++
        }
        return talks
    }
}

module.exports = ConferenceManager