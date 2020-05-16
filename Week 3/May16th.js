/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  var node = head;
  var last = null;
  var pos = 1;
  while (node) {
    node.odd = pos % 2;
    pos++;
    if (!node.next) last = node;
    node = node.next;
  }

  var curr = head;
  var prev = null;
  var firstEven = null;
  while (curr) {
    if (curr === firstEven) break;
    if (!curr.odd) {
      if (!firstEven) firstEven = curr;
      last.next = curr;
      prev.next = curr.next;
      curr.next = null;
      last = curr;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};

/*
71 / 71 test cases passed.
Status: Accepted
Runtime: 56 ms
Memory Usage: 36.3 MB
*/
