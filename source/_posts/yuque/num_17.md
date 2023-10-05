---
title: 17. Letter Combinations of a Phone Number
date: '2019-02-21 17:35:44 +0800'
tags: []
categories: leetcode
abbrlink: 31281
---
初步了解回溯算法<br /><!-- more -->
## 题目描述
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent.<br />A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.<br />![](https://cdn.nlark.com/yuque/0/2019/png/203310/1550741786400-43de21e8-649b-48d7-afb1-4411d21ae211.png#align=left&display=inline&height=162&linkTarget=_blank&originHeight=162&originWidth=200&size=0&width=200)<br />**Example:**
**Input: **"23"
**Output:** ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].**Note:**<br />Although the above answer is in lexicographical order, your answer could be in any order you want.
## 参考代码

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        if (digits.length() != 0) backtrack("",digits);
        return output;
        
    }
    Map<String, String> phone = new HashMap<String, String>() {{
            put("2", "abc");
            put("3", "def");
            put("4", "ghi");
            put("5", "jkl");
            put("6", "mno");
            put("7", "pqrs");
            put("8", "tuv");
            put("9", "wxyz");
        }};
        
    List<String> output = new ArrayList<String>();
    
    public void backtrack(String combination, String next_digits) {
        if (next_digits.length() == 0) {
          //意味着一条分支走到底，譬如 adg
      output.add(combination);
    }else {
      String digit = next_digits.substring(0, 1);
      String letters = phone.get(digit);
      for (int i = 0; i < letters.length(); i++) {
        //分割回溯
        String letter = phone.get(digit).substring(i, i + 1);
        backtrack(combination + letter, next_digits.substring(1));
      }
    }
    }
}
```

## 思路及总结
首先题目描述最好还是加上不允许重复，还有就是几个数字对应几个字母组合。。。。<br />回溯是一种通过探索所有潜在候选者来查找所有解决方案的算法。如果候选解决方案变为不是解决方案（或者至少不是最后一个解决方案），则回溯算法通过在前一步骤上进行一些更改（即回溯然后再次尝试）来丢弃它。<br />我怎么感觉更像 DFS 呢。。。。就是递归然后进行组合，回溯可能考虑的是得到 adg，还要回去得到 adh
## 参考
[https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/)

