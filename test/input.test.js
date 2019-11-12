const input = require('../src/input')
const BinChecker = require('../src/exec/BinPacker')
const ConferenceManager = require('../src/exec/ConferenceManager')

beforeEach( () => initProgram() )
const initProgram = () => {
    return manager = new ConferenceManager(input)
}

////////////////////////////////////////////////////////////
//      Testing Conference Manager - parseStringData 
//////////////////////////////////////////////////////////

test('parseStringData function exists', () => {
    expect(manager.parseStringData).toBeDefined();
});

test('talks is an array', () => {
    let dataType = Array.isArray(manager.parseStringData(input))
    expect(dataType).toBeTruthy();
});

test('a talk instance is an object', () => {
    let dataType = typeof manager.parseStringData(input)[0]
    expect(dataType).toEqual('object');
});

test('talk object has key: title', () => {
    let isKeyInObject = manager.parseStringData(input)[0].hasOwnProperty("title")
    expect(isKeyInObject).toBeTruthy();
});

test('talk object has key: duration', () => {
    let isKeyInObject = manager.parseStringData(input)[0].hasOwnProperty("duration")
    expect(isKeyInObject).toBeTruthy();
});

test('talks length to equal 19', () => {
    let numOfTalks = manager.parseStringData(input).length
    expect(numOfTalks).toBe(19);
});

///////////////////////////////////////
//      Testing BinPacker 
///////////////////////////////////////

describe('for each bin, create a bin instance', () => {
    beforeEach(() => {
        return bin = new BinChecker(manager.parseStringData())
    });

    test('createSession function exists', () => {
        expect(bin.createSession).toBeDefined();
    });

    test('firstFit function exists', () => {
        expect(bin.firstFit).toBeDefined();
    });

    test('firstFit returns an array', () => {
        let dataType = Array.isArray(bin.firstFit())
        expect(dataType).toBeTruthy();
    });

    test('a bin instance is an object', () => {
        let dataType = typeof bin.createSession()
        expect(dataType).toEqual('object');
    });
});