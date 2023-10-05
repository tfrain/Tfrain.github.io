---
title: 11. Container With Most Water
date: '2019-01-24 21:02:11 +0800'
tags: []
categories: leetcode
abbrlink: 55162
---


![](https://cdn.nlark.com/yuque/0/2019/png/203310/1548413561701-4da063ec-2c59-45b0-8b3d-2e876a9be112.png)<br /><!-- more -->
## 题目描述
Given _n_ non-negative integers _a_, _a_, ..., _a_, where each represents a point at coordinate (_i_, _a_). _n_ vertical lines are drawn such that the two endpoints of line _i_ is at (_i_, _a_) and (_i_, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.<br />**Note: **You may not slant the container and _n_ is at least 2.<br /> <br />![](https://cdn.nlark.com/yuque/0/2019/jpeg/203310/1550501812423-3cf8d9bb-dbe9-4829-817f-e4e20fc81e24.jpeg#align=left&display=inline&height=287&linkTarget=_blank&originHeight=383&originWidth=801&size=0&width=600)<br />The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.<br /> <br />**Example:**
**Input:** [1,8,6,2,5,4,8,3,7]
**Output:** 49
## 参考代码

```java
class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        boolean temp;
        for(int i = 0,j = height.length - 1;i < j;) {
            int h = (height[i] > height[j]) ? height[j] : height[i];
            if(h * (j - i)>max) max = h * (j - i);
            temp = (height[i] < height[j]) ? true : false;
            
            if(temp) i++;
            else j--;
        }
        return max;
    }
}
```
## 思路及总结
较为简单的思路就是采用双指针，从两边往中间逼近，并没有什么边界问题，主要是注意在寻找最多水的容器过程中要一直把较深的一边留下，即沿着较小的边界进行移动（因为较小的边界不可能再产生更多的水）。
## 参考
[https://blog.csdn.net/qq_40435621/article/details/84790436](https://blog.csdn.net/qq_40435621/article/details/84790436)

