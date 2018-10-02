"use strict";

// 1. EVEN OR ODD
// Big-O: O(1) because the number of operations
// performed does not depend on the size/value
// of the input.

function isEven(value) {
  // O(1) : always only a single operation
  if (value % 2 === 0) {
    // return === constant time
    return true;
  }
  // return === constant time
  else return false;
}

/**
 * 2. ARE YOU HERE?
 * Big-O: O(n^2)
 */

function areYouHere(arr1, arr2) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i = 0; i < arr1.length; i++) {
    // assignment === constant time
    const el1 = arr1[i];
    // O(n) - looping through array will
    // depend on the size of array. However,
    // this is a nested loop so the overall
    // complexity is now O(n^2)
    for (let j = 0; j < arr2.length; j++) {
      // assignment === constant time
      const el2 = arr2[j];
      // comparison === constant time
      if (el1 === el2) return true;
    }
  }
  // return === constant time
  return false;
}

/**
 * 3. Doubler
 * Big-O: O(n)
 */

function doubleArrayValues(array) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i = 0; i < array.length; i++) {
    // O(n) - looping through array will depend on the size of array.
    // This is simply multiplying every element by 2.
    array[i] *= 2;
  }
  return array;
}

/**
 * 4. Naive Search
 * Big-O: O(n)
 */

function naiveSearch(array, item) {
  // O(n) - looping through array will
  // depend on the size of array
  for (let i = 0; i < array.length; i++) {
    // O(n) - looping through array will depend on the size of array.
    if (array[i] === item) {
      return i;
    }
  }
}

/**
 * 5. Creating pairs
 * Big-O: O(n)
 */

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
