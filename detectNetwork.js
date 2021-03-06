// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var len = cardNumber.length;
  var prefix = n => cardNumber.slice(0, n);
  
  if (len === 14 && (prefix(2) === '38' || prefix(2) === '39')) {
    return 'Diner\'s Club';
  } 
  else if (len === 15 && (prefix(2) === '34' || prefix(2) === '37')) {
    return 'American Express';
  }
  else if ((prefix(2) === '51' || prefix(2) === '52' || prefix(2) === '53' || prefix(2) === '54' || prefix(2) === '55') && len === 16) {
    return 'MasterCard';
  }
  else if ((len === 16 || len === 19) && (prefix(4) === '6011' || prefix(2) === '65' || (Number(prefix(3)) >= 644 && Number(prefix(3)) <= 649))) {
    return 'Discover';
  }
  else if ((len >= 12 && len <= 19) && (prefix(4) === '5018' || prefix(4) === '5020' || prefix(4) === '5038' || prefix(4) === '6304')) {
    return 'Maestro';
  }
  else if ((len >= 16 && len <= 19) && ((Number(prefix(6)) <= 622925 && Number(prefix(6)) >= 622126) || (Number(prefix(4)) <= 6288 && Number(prefix(4)) >= 6282) || (Number(prefix(3)) <= 626 && Number(prefix(3)) >= 624))) {
    return 'China UnionPay';
  }
  else if ((len === 16 || len === 18 || len === 19) && (prefix(4) === '4903' || prefix(4) === '4905' || prefix(4) === '4911' || prefix(4) === '4936' || prefix(4) === '6333' || prefix(4) === '6759' || prefix(6) === '564182' || prefix(6) === '633110')) {
    return 'Switch';
  }
  else if ((len === 13 || len === 16 || len === 19) && prefix(1) === '4') {
    return 'Visa';
  }
};
