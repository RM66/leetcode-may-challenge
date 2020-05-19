var StockSpanner = function () {
  this.prices = [];
  this.lastSpan;
  this.maxPrice = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.prices.unshift(price);
  if (price >= this.maxPrice) {
    this.maxPrice = price;
    span = this.prices.length;
  } else if (this.prices[1] > price) {
    span = 1;
  } else {
    span = this.lastSpan + 1;
    for (var i = span; i < this.prices.length; i++) {
      if (this.prices[i] <= price) span++;
      else break;
    }
  }
  this.lastSpan = span;
  return span;
};

/*
99 / 99 test cases passed.
Status: Accepted
Runtime: 532 ms
Memory Usage: 70.4 MB
*/
