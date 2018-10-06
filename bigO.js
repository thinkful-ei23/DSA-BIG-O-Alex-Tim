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
 * Big-O: O(n^2)
 */

function createPairs(arr) {
  // O(n^2) - looping through array will
  // depend on the size of array however,
  // this is a nested loop so the overall
  // complexity is now O(n^2)
  for (let i = 0; i < arr.length; i++) {
    // Started the first for loop
    for (let j = i + 1; j < arr.length; j++) {
      // Starts the second for loop
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

/**
 * 6. Computing fibonaccis
 * Big-O: O(n)
 */

function generateFib(num) {
  let result = [];
  // Looping through the problem will depend on the input value.
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/**
 * 7. An Efficient Search
 * Big-O: O(log(n))
 */

function efficientSearch(array, item) {
  // This function has a loop with a operation that cuts the size of the data in half. This is Logarithmic.
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

/**
 * 8. Random element
 * Big-O: O(1)
 */

function findRandomElement(arr) {
  // This only ever performs one operation. Contatnt time O(1)
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 9. Is it prime?
 * Big-O: O(n)
 */

function isPrime(n) {
  // This will run directly proportional to the size of the number input.
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

