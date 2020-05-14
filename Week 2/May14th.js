/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {
    children: [],
  };
};

Trie.traverse = function (node, condition) {
  var result;
  for (var child of node.children) {
    if (condition(child)) {
      result = child;
      break;
    }
    result = Trie.traverse(child, condition);
    if (result) break;
  }
  return result;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  var parent;

  if (!this.root.children.length) parent = this.root;
  else {
    if (this.search(word)) return;
    var node = Trie.traverse(this.root, (n) => n.value.startsWith(word));
    if (node) {
      var parent = node.parent;
      parent.children.splice(
        parent.children.findIndex((n) => n === node),
        1
      );
      var newN = { value: word, parent: parent, children: [node] };
      node.parent = newN;
      parent.children.push(newN);
      return;
    }
    var str = word;
    while (str.length > 1) {
      str = str.slice(0, -1);
      node = Trie.traverse(this.root, (n) => n.value === str);
      if (node) break;
    }
    parent = node;
  }
  if (!parent) parent = this.root;

  parent.children.push({ value: word, parent: parent, children: [] });
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return !!Trie.traverse(this.root, (n) => n.value === word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return !!Trie.traverse(this.root, (n) => n.value.startsWith(prefix));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/*
15 / 15 test cases passed.
Status: Accepted
Runtime: 5024 ms
Memory Usage: 52.6 MB
*/
