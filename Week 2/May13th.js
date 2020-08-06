/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) return "0";

  var i = 1;
  var numArr = num.split("");
  while (k > 0) {
    if (
      (numArr[i - 1] === "0" ||
        (numArr[i] === numArr[i - 1] && numArr[i] < numArr[i + 1])) &&
      i < numArr.length - 1
    ) {
      i++;
      continue;
    }
    var toDel = numArr[i] > numArr[i - 1] ? i : i - 1;
    if (toDel === numArr.length - 1 || numArr[toDel] > numArr[toDel + 1]) {
      numArr.splice(toDel, 1);
      i--;
      k--;
    } else i++;
  }

  return numArr.join("").replace(/^0*/, "") || "0";
};

/*
33 / 33 test cases passed.
Status: Accepted
Runtime: 64 ms
Memory Usage: 35.7 MB
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  var stack = [];
  for (var n of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  return stack.join("").replace(/^0*/, "") || "0";
};

/*
33 / 33 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 38.9 MB
*/
