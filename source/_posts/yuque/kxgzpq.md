---
title: 19.Remove Nth Node From End of List
date: '2019-02-28 14:43:58 +0800'
tags: []
categories: leetcode
abbrlink: 41284
---
链表<br /><!-- more -->
<a name="273a27cc"></a>
## 题目描述
Given a linked list, remove the _n_-th node from the end of list and return its head.<br />**Example:**<br />Given linked list: **1->2->3->4->5**, and **_n_ = 2**.

After removing the second node from the end, the linked list becomes **1->2->3->5**.<br />**Note:**<br />Given _n_ will always be valid.<br />**Follow up:**<br />Could you do this in one pass?
<a name="36967e2c"></a>
## 参考代码
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
//Two pass algorithm
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        int length = 0;
        ListNode first = head;
        while (first != null) {
            length++;
            first = first.next;
        }
        length -= n;
        first = dummy;
        while (length > 0) {
            length--;
            first = first.next;
        }
        first.next = first.next.next;
        return dummy.next;
    }
}

//One pass algorithm
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy;
    ListNode second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (int i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}
```

<a name="d7d37168"></a>
## 思路及总结
不论是两遍算法，还是一遍算法，都用了一个额外空间 dummy，然后返回的是 dummy.next，一遍的算法很灵巧的避过了二遍算法的 n 的定位，
<a name="d17a0f0b"></a>
## 参考
[https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/)

