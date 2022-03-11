'use strict';

var isSquare = function (n) {
  // since sqaure numbers are not negative, return false if n is a negative number
  if (n < 0) {
    return false;
  } else {
    // else return true or false based on whether the number sqaured is a whole number or not
    return Number.isInteger(Math.sqrt(n));
  }
};
