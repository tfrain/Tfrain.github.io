---
title: 4. Median of Two Sorted Arrays
date: '2019-02-10 18:09:45 +0800'
tags: []
categories: leetcode
abbrlink: 43424
---
![2..png](https://cdn.nlark.com/yuque/0/2019/png/203310/1549985856512-cc0b2a9d-65c8-4bcf-8e58-8056ef01fcb1.png#align=left&display=inline&height=835&linkTarget=_blank&name=2..png&originHeight=835&originWidth=724&size=131928&width=724)<br /><!-- more -->
## 题目描述
There are two sorted arrays **nums1** and **nums2** of size m and n respectively.<br />Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).<br />You may assume **nums1** and **nums2** cannot be both empty.<br />**Example 1:**<br />nums1 = [1, 3]<br />nums2 = [2]

The median is 2.0<br />**Example 2:**<br />nums1 = [1, 2]<br />nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
## 参考代码

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        if (m > n) {
            int[] tmp = nums1; nums1 = nums2; nums2 = tmp;
            int temp = m; m = n; n = temp;
        }
        int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;
        while (iMin <= iMax) {
            int i = (iMin + iMax) / 2;
            int j = halfLen - i;
            if (i < iMax && nums2[j-1] > nums1[i]) {
                iMin = i + 1;
            }
            else if (i > iMin && nums1[i-1] > nums2[j]) {
                iMax = i - 1;
            }
            else {
                int maxLeft = 0;
                if (i == 0) { maxLeft = nums2[j-1];}
                else if (j == 0) {maxLeft = nums1[i-1];}
                else { maxLeft = Math.max(nums1[i-1], nums2[j-1]); }
                if ( (m + n) % 2 == 1) { return maxLeft; }
                
                int minRight = 0;
                if (i == m) { minRight = nums2[j]; }
                else if (j == n) {minRight = nums1[i]; }
                else { minRight = Math.min(nums2[j], nums1[i]); }
                
                return (maxLeft + minRight) / 2.0;
            }
        }
        return 0.0;
    }
}
```

## 思路及总结
当找到目标对象 i_i_时，中位数为：<br />![](https://cdn.nlark.com/yuque/__latex/b50574d411c81d6628a7ea75b85359d0.svg#card=math&code=max%28A%5Bi%E2%88%921%5D%2CB%5Bj%E2%88%921%5D%29%2C%20%E5%BD%93%20m%2Bn%20%E4%B8%BA%E5%A5%87%E6%95%B0%E6%97%B6&height=27&width=332)<br />![](https://cdn.nlark.com/yuque/__latex/697e2a057e74f58fce21f9c72b44addf.svg#card=math&code=2%0Amax%28A%5Bi%E2%88%921%5D%2CB%5Bj%E2%88%921%5D%29%2Bmin%28A%5Bi%5D%2CB%5Bj%5D%29%0A%E2%80%8B%09%0A%20%2C%20%E5%BD%93%20m%2Bn%20%E4%B8%BA%E5%81%B6%E6%95%B0%E6%97%B6&height=27&width=486)<br />当为奇数时，left的数字较多，可以举例来理解一下<br />![](https://cdn.nlark.com/yuque/__latex/8aaac2d68b6fe1dc5f27b21886d5b59c.svg#card=math&code=i%20%3D%200%20%5Csim%20m%2C%20j%20%3D%20%5Cfrac%7Bm%20%2B%20n%20%2B%201%7D%7B2%7D%20-%20i&height=41&width=240) 保证奇偶都能满足<br />最后的那个数学证明是看到头都大了，大概是那个道理。还是官方解答，最为致命。时间复杂度为log(m+n),意思就是只能单层循环一次两个数组，有点利用二分法和分治的思想。
## 参考
[https://leetcode.com/problems/median-of-two-sorted-arrays/solution/](https://leetcode.com/problems/median-of-two-sorted-arrays/solution/)

