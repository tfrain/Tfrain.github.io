---
title: CSS盒模型及BFC
copyright: true
tags: CSS
categories: CSS
abbrlink: 26278
date: 2018-12-07 20:17:48
keywords:
description:
---

## 前言
<blockquote class="blockquote-center">**确实是因为菜，感觉自己没什么东西可以写，最近被迫学习一些前端的东西，为了防止日后遗忘，方便有用之时再次学习并加深印象，就记录一些比较基础的东西。 **</blockquote>

<!-- more -->

## 基础知识
内容（CONTENT）就是盒子里装的东西；
填充(PADDING)就是怕盒子里装的东西（贵重的）损坏而添加的泡沫或者其它抗震的辅料；
边框(BORDER)就是盒子本身了；
边界(MARGIN)则说明盒子摆放的时候的不能全部堆在一起，要留一定空隙保持通风，同时也为了方便取出。在网页设计上，内容常指文字、图片等元素，但是也可以是小盒子（DIV嵌套），与现实生活中盒子不同的是，现实生活中的东西一般不能大于盒子，否则盒子会被撑坏的，而CSS盒子具有弹性，里面的东西大过盒子本身最多把它撑大，但它不会损坏的。
填充只有宽度属性，每个HTML标记都可看作一个盒子；
更多基础知识参考：w3school：http://www.w3school.com.cn/
## 两种模式
盒模型的组成:
由里向外：content、padding、border、margin

在标准模型（默认）中，盒模型的宽高只是内容（content）的宽高
![2018-12-07.10.43.22-1.png](https://raw.githubusercontent.com/Thunderforrain/picture/master/2018-12-07.10.43.22-1.png)

而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高
![2018-12-07.10.43.42-2.png](https://raw.githubusercontent.com/Thunderforrain/picture/master/2018-12-07.10.43.42-2.png)

模式使用：
~~~
  box-sizing: content-box 是W3C盒子模型
  box-sizing: border-box 是IE盒子模型
~~~
## BFC(Block Formatting Context)
前端的页面设计，实现一些常见的布局必须要掌握BFC的规律
### 概念
BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

### 形成BFC的条件（满足四条之一即可）

      1、浮动元素，float 除 none 以外的值； 
      2、定位元素，position（absolute，fixed）； 
      3、display 为以下其中之一的值 inline-block，table-cell，table-caption； 
      4、overflow 除了 visible 以外的值（hidden，auto，scroll）；
      
### BFC的特性

      1.内部的Box会在垂直方向上一个接一个的放置。
      2.垂直方向上的距离由margin决定
      3.bfc的区域不会与float的元素区域重叠。
      4.计算bfc的高度时，浮动元素也参与计算
      5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
      
### 功能实现

      1.内部的Box会在垂直方向上一个接一个的放置。
      2.垂直方向上的距离由两个盒子的margin相加或重叠决定
      3.随浏览器自适应，防止出现这一行跑到下一行的状况
      4.防止字体环绕图片
      5.防止浮动元素脱离常规流
      
https://www.cnblogs.com/chen-cong/p/7862832.html
## 日常搬运

> In a block formatting context, each box’s left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box’s line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).

> 在BFC中，每个盒子的左外边框紧挨着左边框的包含块（从右到左的格式化时，则为右边框紧挨）。即使在浮动里也是这样的（尽管一个盒子的边框会因为浮动而萎缩），除非这个盒子的内部创建了一个新的BFC（这种情况下,由于浮动，盒子本身将会变得更窄）

[W3C](https://www.w3cplus.com/css/understanding-block-formatting-contexts-in-css.html)  原文 © w3cplus.com
前因后果、细节重点讲解较为仔细

[掘金](https://juejin.im/post/5909db2fda2f60005d2093db)
这篇文章进行了更多的拓展，算是加强巩固一下
