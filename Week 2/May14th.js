/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  var node = this.root;
  for (var ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  var node = this.root;
  for (var ch of word) {
    if (!node[ch]) return false;
    node = node[ch];
  }
  return !!node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  var node = this.root;
  for (var ch of prefix) {
    if (!node[ch]) return false;
    node = node[ch];
  }
  return true;
};

/*
15 / 15 test cases passed.
Status: Accepted
Runtime: 156 ms
Memory Usage: 53.8 MB
*/
