const Session = require('../model/Session')

class BinPacker {
    constructor(talks) {
        this.bins = 0
        this.talks = talks
        this.slotIndex = 0
    }

    createSession() {
        let slot = [180, 240]
        let current = this.slotIndex % 2 === 0 ? slot[0] : slot[1]
        this.slotIndex++
        let session = new Session(current)
        return session        
    }

    firstFit() { 
    // Initialize result (Count of bins) 
        // int res = 0; 
        // Create an array to store remaining space in bins 
        // there can be at most n bins 
        let binHolder = [];

        // Place items one by one 
        let talks = this.talks.sort((a,b) => b.duration - a.duration)

        for (let i = 0; i < talks.length; i++) { 
            // Find the first bin that can accommodate 
            // weight[i] 
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