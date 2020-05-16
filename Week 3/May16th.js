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
  if (!head) return head;

  var node = head;
  while (node.next) node = node.next;
  var firstLast = node;
  var last = node;
  var curr = head.next;
  var prev = head;
  var firstEven = null;

  while (curr) {
    if (curr === firstEven) break;
    if (!firstEven) firstEven = curr;
    last.next = curr;
    prev.next = curr.next;
    curr.next = null;
    if (curr === firstLast) break;
    last = curr;
    prev = prev.next;
    curr = prev.next;
  }

  return head;
};

/*
71 / 71 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 36.3 MB
*/
