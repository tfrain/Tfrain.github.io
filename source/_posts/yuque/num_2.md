---
title: 2. Add Two Numbers
date: '2019-02-09 16:28:55 +0800'
tags: []
categories: leetcode
abbrlink: 43278
---
![2.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1549785197064-d8534b88-345b-42a3-b91c-2e016c8e60a6.png#align=left&display=inline&height=1034&name=2.png&originHeight=1034&originWidth=665&size=108078&status=done&width=665)<br /><!-- more -->
<a name="273a27cc"></a>
## 题目描述
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.<br />You may assume the two numbers do not contain any leading zero, except the number 0 itself.<br />**Example:**
**Input:** (2 -> 4 -> 3) + (5 -> 6 -> 4)
**Output:** 7 -> 0 -> 8
**Explanation:** 342 + 465 = 807.<a name="36967e2c"></a>
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
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if(l1 == null) {
            l1 = new ListNode(0);
        }
        if(l2 == null) {
            l2 = new ListNode(0);
        }
        
        if(l1.next == null && l2.next == null) {//基准情况
            int val = l1.val + l2.val;
            if(val > 9) {
                ListNode node = new ListNode(val%10);
                node.next = new ListNode(1);//最大的数字也只能是19
                return node;
            }
            else {
                return new ListNode(val);
            }
        }
        else {
            int val = l1.val + l2.val;
            if(val > 9) {
                val -= 10;
                if(l1.next != null) {//将进位赋值其一
                    l1.next.val++;
                }
                else if(l2.next != null) {
                    l2.next.val++;
                }
            }
            ListNode node = new ListNode(val);
            node.next = addTwoNumbers(l1.next,l2.next);
            //最终返回的结果
            return node;
         }
    }
}
```

<a name="d7d37168"></a>
## 思路及总结
涉及到链表和递归，感觉自己的基础实在是太差了，基础的算法思想都不会使用，还有就是自己的java基础也很薄弱，经常不知道如何来调用一些常用函数，结合自身情况，尽早提升吧。<br />本题主要要考虑到进位的安排，使用了递归，递归问题一般都能转换为循环问题，如[https://www.programcreek.com/2012/12/add-two-numbers/](https://www.programcreek.com/2012/12/add-two-numbers/)，复杂度为O(n)，进位只会进1。
<a name="d17a0f0b"></a>
## 参考
[https://blog.csdn.net/yanyumin52/article/details/79811375](https://blog.csdn.net/yanyumin52/article/details/79811375)<br />[https://blog.csdn.net/w496272885/article/details/80212426](https://blog.csdn.net/w496272885/article/details/80212426)

