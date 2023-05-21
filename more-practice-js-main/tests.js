const findPairs = require('./challenge')
const assert = require('assert')

function combinations(array, target) {
  return(JSON.stringify(target) === JSON.stringify(array)
  || JSON.stringify(target) === JSON.stringify([[array[0][1], array[0][0]], array[1]])
  || JSON.stringify(target) === JSON.stringify([[array[0][1], array[0][0]], [array[1][1], array[1][0]]])
  || JSON.stringify(target) === JSON.stringify([array[0], [array[1][1], array[1][0]]])
  || JSON.stringify(target) === JSON.stringify([array[1], array[0]]))
  || JSON.stringify(target) === JSON.stringify([[array[1][1], array[1][0]], array[0]])
  || JSON.stringify(target) === JSON.stringify([[array[1][1], array[1][0]], [array[0][1], array[0][0]]])
  || JSON.stringify(target) === JSON.stringify([array[1], [array[0][1], array[0][0]]])
}

describe('Tests', function () { 
  it('array_of_four_positions', function () {
    // Failure message: 
    // Method called: findPairs([1, 3, 5, 11], 14)

    const arr = [1, 3, 5, 11]
    const result = findPairs(arr, 14)
    assert(JSON.stringify(result) === JSON.stringify([[3, 11]]) || JSON.stringify(result) === JSON.stringify([[11, 3]]))
  })

  it('array_of_nine_positions', function () {
    // Failure message: 
    // Method called: findPairs([8, 17, 5, 11, 9, 6, 3, 2, 15], 21)

    const arr = [8, 17, 5, 11, 9, 6, 3, 2, 15]
    const result = findPairs(arr, 21)
    assert(JSON.stringify(result) === JSON.stringify([[6, 15]]) || JSON.stringify(result) === JSON.stringify([[15, 6]]))
  })

  it('array_of_eleven_positions', function () {
    // Failure message: 
    // Method called: findPairs([-8, 7, 11, 8, 5, 9, 3, 6, 2, -9, 4], 0)

    const arr = [-8, 7, 11, 8, 5, 9, 3, 6, 2, -9, 4]
    const result = findPairs(arr, 0)
    assert(combinations([[-8, 8], [9, -9]], result))
  })

  it('array_of_nineteen_positions', function () {
    // Failure message: 
    // Method called: findPairs([17, -20, 21, -3, 33, 10, 6, -11, 19, 40, 11, 17, 56, 33, 72, 5, 1, 36, 51], 40)

    const arr = [17, -20, 21, -3, 33, 10, 6, -11, 19, 40, 11, 17, 56, 33, 72, 5, 1, 36, 51]
    const result = findPairs(arr, 40)
    assert(combinations([[21, 19], [-11, 51]], result))
  })
})
