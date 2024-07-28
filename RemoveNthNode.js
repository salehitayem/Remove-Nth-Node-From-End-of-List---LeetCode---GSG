/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   
    var rev = function(head) {
        var curr = head;
        var nxt = head?.next;
        var prev = null
        while(curr) {
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }
    head = rev(head);
    var tmp = head;
    var prev = head;
    if (n == 1) {
        head = head.next;
        head = rev(head);
        return head;
    }
    for (var i = 0; i < n - 1; i++) {
        prev = tmp;
        tmp = tmp.next;
    }
    if (prev?.next != null) {
        prev.next = tmp?.next;
    }

    head = rev(head);
    return head;
};
