---
title: 5. Longest Palindromic Substring
date: '2019-02-15 18:01:56 +0800'
tags: []
categories: leetcode
abbrlink: 45700
---
![5.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550243072369-11377f07-8e83-417e-ac9a-dbac75c3b585.png#align=left&display=inline&height=673&linkTarget=_blank&name=5.png&originHeight=673&originWidth=740&size=99189&width=740)<br /><!-- more -->
## 题目描述
Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.<br />**Example 1:**
**Input:** "babad"
**Output:** "bab"
**Note:** "aba" is also a valid answer.**Example 2:**
**Input:** "cbbd"
**Output:** "bb"<br />## 参考代码
```java
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);//奇数
            int len2 = expandAroundCenter(s, i, i + 1);//偶数
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;//确使奇偶行得通
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        int L = left, R = right;
        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R))
        {
            L--;
            R++;
        }
        return R - L - 1;//因为循环结束时，长度各边减一
    }
    
}
```

## 思路及总结
偶数减一除以二(0.5-1.0)和奇数减一除以二(0.0-0.5)两者可以保持除法上的一致。<br />官方首先提醒了最长公共子串的误区，然后列举了暴力法，动态规划，和本题的中心扩展法。详细内容直接参考官方题解。
## 参考
[https://leetcode-cn.com/problems/longest-palindromic-substring/solution/](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/)<br />[https://leetcode.com/problems/longest-palindromic-substring/solution/](https://leetcode.com/problems/longest-palindromic-substring/solution/)<br />Manacher 算法<br />[https://segmentfault.com/a/1190000008484167](https://segmentfault.com/a/1190000008484167)

