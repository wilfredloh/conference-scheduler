const Conference = require('../model/Conference')
const Track = require('../model/Track')
const Talk = require('../model/Talk')
const BinPacker = require('./BinPacker')


class ConferenceManager {
    constructor(input) {
        this.input = input
        this.conference = []
    }

    schedule (talks) {
        let conference = new Conference()

        // place all talks into the bin packer
        let binStore = new BinPacker(talks)
        
        // create and sort talks using firstFit function
        let bins = binStore.firstFit()

        // console.log(bins)

        // for every 2 binStore, create a new track
        for (let i=0; i<bins.length; i+=2) {
            // console.log('is running!')
            let track = new Track()
            // console.log(track.session)
            track.session.push(bins[i])
            track.session.push(bins[i+1])
            conference.addTrack(track)
        }


        // this.conference.push(conference)
        return conference

        // console.log(conference.tracks[0].session[0].talks[0].title)

        
        // split sessions into batches of 2
        // for each track, attach 2 sessions
        // attach all tracks to the conference
        
        // let track = new Track(new MorningSession(), new AfternoonSession())
        // conference.addTrack(track)

        // for (let i=0; i<talks.length; i++) {
        //     if (trackisfull) {
        //         new Track(new MorningSession(), new AfternoonSession())
        //     }            

        // }
    }

    showConference (conf) {
        conf.tracks.forEach((tracks, i) => {
            // console.log('@@@@@@@@@@@@@@@@@@@@')
            console.log('DAY: ', i+1)
            // console.log('@@@@@@@@@@@@@@@@@@@@')
            tracks.session.forEach( (sessions,i) => {
                // console.log('slot remaining: ', sessions.slot)
                let hr = 9
                let min = 0
                let ampm = "AM";

                
                if (i === 1){
                    // console.log('###################')
                    console.log('12:00 PM Lunch Break')
                    // console.log('###################')
                    hr = 13
                    min = 0
                }   

                sessions.talks.forEach(talks => {
                    if( hr > 12 ) {
                        hr -= 12;
                        ampm = "PM";
                    }
                    if (min < 10) {
                        min = '0' + min;
                    }
                    if (hr <10) hr = '0' + hr
                    console.log( `${hr}:${min} ${ampm}`, talks.title)
                    
                    hr = parseInt(hr)
                    min = parseInt(min);
                    // console.log('MINNNNNNNNNNNNNN: ', min)
                    // console.log('HRRRHRHRHHRHRHRHRR: ', hr)
                    // console.log('talkduration: ', talks.duration)
                    min = min+talks.duration;
                    // console.log('MINNNNNNNNNNNNNN: ', min)
                    
                    if (min >= 60) {
                        // console.log('woohoooooo!!!!!!!!!')
                        min = min - 60
                        hr = hr +1
                    }

                    
                    
                });
                
                if (i === 1){
                    if (min < 10) min = '0' + min;
                    if (hr <10) hr = '0' + hr

                    // console.log('###################')
                    console.log(`${hr}:${min} PM Networking`)
                    // console.log('###################')
                }  
                // console.log('slot remaining: ', sessions.slot)
                // console.log('Network time: ', 60 - sessions.slot)

            });
        });
    }

    parseTime () {
        // let hr = 9
        // let min = 0
        
        let ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }
    }

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