// // A Session superclass represents the master class that each subclass (Morning & Afternoon) inherits from.

class Session {
  
    addHour() {
        this.startTime.hr += 1
    }

    addTime(inputMin) {
        this.startTime.min = this.startTime.min + inputMin
        this.checkHourIncrease(this.startTime)
    }

    checkHourIncrease (time) {
        if (time.min >= 60) {
            time.hr += 1
            time.min -= 60
        }
    }

    formatTime (time) {
        if (time < 10) time = '0' + time
        return time
    }

    getTalkTime(talkTitle) {
        let time = this.startTime
        console.log(`${this.formatTime(time.hr)}:${this.formatTime(time.min)} ${time.ampm} ${talkTitle}`)
        if (talkTitle === 'Lunch Break') this.addHour()
    }
}

module.exports = Session
