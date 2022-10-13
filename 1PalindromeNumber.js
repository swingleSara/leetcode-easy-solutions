const isPalindrome = (x) =>
  x < 0 ? false : x.toString().split("").reverse().join("") === x.toString();
