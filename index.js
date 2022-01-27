/* eslint-disable quotes */

const prompt = require('prompt-sync')({ sigint: true })
const data = require('./data')

/**
 * Returns talent filtered by location.
 *
 * @param {JSON} talent JSON array of talent
 * @param {string} location Desired location by which to filter talent
 * @return {string} talent available at desired location
 */

function talentByLocation(talent, location) {
  // checking data for required keys (name and location)

  if (talent.length === 0 || talent === undefined)
    return "sorry, there's a problem with our talent list, please try again" // check talent param has data
  const checkForLocationKey = talent.filter(
    (person) => !person.hasOwnProperty('location')
  )
  if (checkForLocationKey.length > 0)
    return 'error, no locations found in talent data' //check data has location key
  const checkForNameKey = talent.filter(
    (person) => !person.hasOwnProperty('name')
  )
  if (checkForNameKey.length > 0) return 'error, no names found in talent data' //check data has name key

  const formatLocationParam = location.toLowerCase() //make input case insensitive

  talent.forEach((person) => (person.location = person.location.toLowerCase()))

  const filteredTalent = talent.filter(
    (person) => person.location === formatLocationParam
  ) // filter data by location param

  if (filteredTalent.length === 0)
    return 'sorry, no talent available at that location' // check location param matches location in data

  const namesOfTalent = filteredTalent.map((person) => person.name) // get names of talent

  return namesOfTalent.join(', ') // extract names from array for output
}

const enterLocation = prompt('enter a location: ')

const findTalent = talentByLocation(data, enterLocation)

console.log(findTalent)

module.exports = { talentByLocation }
