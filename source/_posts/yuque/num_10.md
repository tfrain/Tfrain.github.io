---
title: 10. Regular Expression Matching
date: '2019-02-17 16:19:15 +0800'
tags: []
categories: leetcode
abbrlink: 932
---
![10.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550394708947-b2e326a7-efb4-4624-96c8-8c9a9fd008a5.png#align=left&display=inline&height=305&linkTarget=_blank&name=10.png&originHeight=403&originWidth=985&size=75736&status=done&width=746)<br /><!-- more --><br />摘要里面放的是递归的方法，下面的是动态规划(Dynamic Programming)的方法。<br />![10_2.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550396242107-90e5eb98-055a-45c0-8664-aaceef9e1e18.png#align=left&display=inline&height=385&linkTarget=_blank&name=10_2.png&originHeight=529&originWidth=1024&size=90834&status=done&width=746)
<a name="273a27cc"></a>
## 题目描述
Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'`.<br />'.' Matches any single character.<br />'*' Matches zero or more of the preceding element.<br />The matching should cover the **entire** input string (not partial).<br />**Note:**
* `s` could be empty and contains only lowercase letters `a-z`.
* `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

**Example 1:**
**Input:**
s = "aa"
p = "a"
**Output:** false
**Explanation:** "a" does not match the entire string "aa".**Example 2:**
**Input:**
s = "aa"
p = "a*"
**Output:** true
**Explanation:** '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".**Example 3:**
**Input:**
s = "ab"
p = ".*"
**Output:** true
**Explanation:** ".*" means "zero or more (*) of any character (.)".**Example 4:**
**Input:**
s = "aab"
p = "c*a*b"
**Output:** true
**Explanation:** c can be repeated 0 times, a can be repeated 1 time.Therefore it matches "aab".**Example 5:**
**Input:**
s = "mississippi"
p = "mis*is*p*."
**Output:** false
<a name="36967e2c"></a>
## 参考代码
```java
//递归
class Solution {
    public boolean isMatch(String s, String p) {
        if (p.isEmpty()) return s.isEmpty();
        boolean first_match = (!s.isEmpty() &&
                               (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));

        if (p.length() >= 2 && p.charAt(1) == '*'){
          //(isMatch(s, p.substring(2))使第 p 中第三个字符进行匹配，
          //(first_match && isMatch(s.substring(1), p))使 p 中 * 之前的字符进行匹配
            return (isMatch(s, p.substring(2)) ||
                    (first_match && isMatch(s.substring(1), p)));
        } else {
            return first_match && isMatch(s.substring(1), p.substring(1));
        }
    }
}
//DP


class Solution {
    public boolean isMatch(String s, String p) {
       boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];
        dp[s.length()][p.length()] = true;
        
        for (int i = s.length(); i >= 0; i--){
            for (int j = p.length() - 1; j >= 0; j--){
                boolean first_match = (i < s.length() && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.'));
                if (j + 1 < p.length() && p.charAt(j+1) == '*'){
                    dp[i][j] = dp[i][j+2] || first_match && dp[i+1][j];//
                  
                } else {
                    dp[i][j] = first_match && dp[i+1][j+1];
                }
            }
        }
        return dp[0][0];
    }
}
```

<a name="d7d37168"></a>
## 思路及总结
递归的思路： 大致是以 p 字段划分，两两进行递归。0,1,2个字符、纯字母和含有 . 的都较好理解。下面考虑含有 * 符号的。例如 aaacce 和 a*c*e，(first_match && isMatch(s.substring(1), p)) 递归到 cce 和 a*c*e 的情况，然后 (isMatch(s, p.substring(2)) 收拾最后一步，则 p 中 a*c 的匹配结束，但是删除的字符是 a*，第三个字符可能在接下来的一组进行使用。<br />到了这一步，大致理解 If a star is present in the pattern, it will be in the second position \text{pattern[1]}pattern[1]. Then, we may ignore this part of the pattern, or delete a matching character in the text. If we have a match on the remaining strings after any of these operations, then the initial inputs matched. 是什么含义。但是看懂和写何止十万八千里，我还不知到要学习多少次，才能有这样的算法功底。复杂度有些复杂，大致应当是指空间复杂度为O(2^n)，空间复杂度是O(n^2)；<br />DP的思路：<br />了解一下DP：[https://blog.csdn.net/zjkc050818/article/details/74532023](https://blog.csdn.net/zjkc050818/article/details/74532023)<br />可能更适合看是视频：[https://www.bilibili.com/video/av16544031/?spm_id_from=333.788.videocard.0](https://www.bilibili.com/video/av16544031/?spm_id_from=333.788.videocard.0)<br />这里面提到了表格的DP：[https://www.bilibili.com/video/av18512769?from=search&seid=1441380389563731271](https://www.bilibili.com/video/av18512769?from=search&seid=1441380389563731271)<br />这个 DP 的选与不选都不明显，而且很难判断出口，等做多了，想必能更好理解。<br />啥都不会是我最大的觉悟。。。。。别人是兔派，我是兔看派，第一次遇见dp，都说dp和博弈论是神仙题，我感受到了。
<a name="d17a0f0b"></a>
## 参考
[https://leetcode.com/problems/regular-expression-matching/solution/](https://leetcode.com/problems/regular-expression-matching/solution/)

