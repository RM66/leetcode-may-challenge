var StockSpanner = function () {
  // { price, span }
  this.data = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  var span = 1;
  while (this.data.length && this.data[this.data.length - 1].price <= price) {
    span += this.data.pop().span;
  }
  this.data.push({ price, span });
  return span;
};

/*
99 / 99 test cases passed.
Status: Accepted
Runtime: 352 ms
Memory Usage: 70.9 MB
*/
