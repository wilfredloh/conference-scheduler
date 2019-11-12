// A Morning session class represents one session within a Track and comprises of 1 or more Talks.

class MorningSession {
    constructor(slot) {
        this.slot = slot;
        this.talks = []
        this.startTime = {
            hr: 9,
            min: 0,
            ampm: "AM"
        }
    }

    addTime(inputMin) {
        this.startTime.min = this.startTime.min + inputMin
        checkHourIncrease(this.startTime)
    }

    getTalkTime(talkTitle) {
        let time = this.startTime
        console.log(`${formatTime(time.hr)}:${formatTime(time.min)} ${time.ampm} ${talkTitle}`)
    }
}

module.exports = MorningSession


let checkHourIncrease = (time) => {
    if (time.min >= 60) {
        time.hr = time.hr + 1
        time.min = time.min - 60
    }
}

let formatTime = (time) => {
    if (time < 10) time = '0' + time
    return time
}