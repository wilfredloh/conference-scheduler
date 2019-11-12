// The BinPacker class creates a BinPacker instance that stores all talks upon creation and returns a sorted list of talks upon calling the firstFit function

const AfternoonSession = require('../model/AfternoonSession')
const MorningSession = require('../model/MorningSession')

class BinPacker {
    constructor(talks) {
        this.bins = 0
        this.talks = talks
        this.slotIndex = 0
        this.slot = [180,240]
    }

    createSession() {
        let session;
        if (this.slotIndex % 2 === 0) {
            session = new MorningSession(this.slot[0])
        } else {
            session = new AfternoonSession(this.slot[1])
        }
        this.slotIndex++
        return session        
    }

    firstFit() { 
    // Initialize result (Count of bins) 
        // Create an array to store remaining space in bins 
        // there can be at most n bins 
        let binHolder = [];

        // Place items one by one 
        let talks = this.talks.sort((a,b) => b.duration - a.duration)

        for (let i = 0; i < talks.length; i++) { 
            // Find the first bin that can accommodate weight[i] 
            let j; 
            for (j = 0; j < this.bins; j++) { 
                if (binHolder[j].slot >= talks[i].duration) { 
                    binHolder[j].slot -= talks[i].duration;
                    binHolder[j].talks.push(talks[i]);
                    break; 
                } 
            } 
            
            // If no bin could accommodate weight[i] 
            if (j === this.bins) { 
                binHolder.push(this.createSession());
                binHolder[this.bins].slot -= talks[i].duration; 
                binHolder[this.bins].talks.push(talks[i])
                this.bins++; 
            } 
        }
        return binHolder; 
    } 
}


module.exports = BinPacker