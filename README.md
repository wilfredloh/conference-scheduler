# Technologies Used
- Node.js, Jest.js

# Features
- User provides a list of talks and time (duration)
- The program splits each talk based on the min 
- The program shows to the user the sorted schedule (uses BinPacking algorithm)
- This schedule maximizes talks from earlier days until it cannot do so anymore then, it creates a new day for an event

# Structure
- Index.js: The program runs in the terminal and user has to key in input to see results
- Exec folder: Contains classes to sort schedule and hold/run the conference
- Model folder: Contains all classes/subclasses that make up a conference
- Test folder: Contains test function and runs tests

# Installation
1. Install dependencies
``` 
npm install
```
2. Run program
```
node index
```
3. Run test
```
npm test / npm run test
```

