/* eslint-disable quotes */
const { talentByLocation } = require('./index')
const data = require('./data')
const { expect, test } = require('@jest/globals')

// when running tests you may be prompted to input a location, this does not affect the test and can be skipped by pressing enter


test('gives correct output with lowercase input', () => {
  expect(talentByLocation(data, 'springfield')).toBe('Homer Simpson, Krusty the Clown')
})

test('gives correct output with camelcase input', () => {
  expect(talentByLocation(data, 'SpringField')).toBe('Homer Simpson, Krusty the Clown')
})

test('gives no talent found when no location matched', () => {
  expect(talentByLocation(data, 'london')).toBe('sorry, no talent available at that location')
})


/// ***** The following tests check for malformed JSON data and give specific feedback. Comment out tests above to isolate results ***** ///

// test('gives error when found when no JSON data found', () => {
//   const blankData = []
//   expect(talentByLocation(blankData, 'los angeles')).toBe('sorry, there\'s a problem with our talent list, please try again')
// })

// test('gives error when found when no location key found in data provided', () => {
//   const noLocation = [
//     {
//       "name": "Diane Nguyen",
//       "date_of_birth": "1980-03-19"
//     }
//   ]
//   expect(talentByLocation(noLocation, 'los angeles')).toBe('error, no locations found in talent data')
// })

// test('gives error when found when no names key found in data provided', () => {
//   const noName = [
//     {
//       "location": "Los Angeles",
//       "date_of_birth": "1980-03-19"
//     }
//   ]
//   expect(talentByLocation(noName, 'los angeles')).toBe('error, no names found in talent data')
// })
