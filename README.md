# Contact Technical Take Home Interview Test Program

This is a CLI program written to satisfy the specifications of the Contact Techincal Test - Associate

## Set-up Instructions

* The program is written in JavaScript and will run in NodeJS.
* The program requires the prompt-sync Node Module. Please run `npm install` from the root of the project to install the packages found in the package.json file.
* Again, in the root directory of the project run `node index.js` to start the program

## Using the Program
* Users will be prompted to enter a location, this input is case insensitive.
* The data is currently hard-coded from a sample set, meaning you can choose from three locations: 
  1. Springfield
  2. Los Angeles
  3. Philidelphia
* After entering the location, the program will output available talent in that location and the program will end. 
* Error messages will be outputed if no talents can be found at the location inputted by the user and/or if there is a problem with the talent data. 

## Testing
* Unit tests were written for the program's main `talentByLocation()` function, using the Jest library. The tests can be found [here](index.test.js)
* The script to run the tests is `npm test` 
