---
title: Linux学习2
copyright: true
tags: Linux
categories: Linux
abbrlink: 17220
date: 2018-12-31 13:47:45
keywords:
description:
---
<blockquote class="blockquote-center">**文件目录操作命令(9-15）**</blockquote>
<!-- more -->
>     编译：peida
    链接：https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html
    
# touch命令
## 概述
linux的touch命令不常用，一般在使用make的时候可能会用到，用来修改文件时间戳，或者新建一个不存在的文件。
## 命令格式
touch [选项]... 文件...
## 命令参数
```
-a   或--time=atime或--time=access或--time=use 　只更改存取时间。
-c   或--no-create 　不建立任何文档。
-d 　使用指定的日期时间，而非现在的时间。
-f 　此参数将忽略不予处理，仅负责解决BSD版本touch指令的兼容性问题。
-m   或--time=mtime或--time=modify 　只更改变动时间。
-r 　把指定文档或目录的日期时间，统统设成和参考文档或目录的日期时间相同。
-t 　使用指定的日期时间，而非现在的时间。
```
## 命令功能
touch命令参数可更改文档或目录的日期时间，包括存取时间和更改时间。
## 常用命令
实例：更新log.log的时间和log2012.log时间戳相同
命令：touch -r log.log log2012.log

实例：设定文件的时间戳
命令：touch -t 201211142234.50 log.log
## 说明
-t  time 使用指定的时间值 time 作为指定文件相应时间戳记的新值．此处的 time规定为如下形式的十进制数:      
  [[CC]YY]MMDDhhmm[.SS]     
  这里，CC为年数中的前两位，即”世纪数”；YY为年数的后两位，即某世纪中的年数．如果不给出CC的值，则touch   将把年数CCYY限定在1969--2068之内．MM为月数，DD为天将把年数CCYY限定在1969--2068之内．MM为月数，DD为天数，hh 为小时数(几点)，mm为分钟数，SS为秒数．此处秒的设定范围是0--61，这样可以处理闰秒．这些数字组成的时间是环境变量TZ指定的时区中的一个时 间．由于系统的限制，早于1970年1月1日的时间是错误的。

# cat命令
## 概述
cat命令的用途是连接文件或标准输入并打印。这个命令常用来显示文件内容，或者将几个文件连接起来显示，或者从标准输入读取内容并显示，它常与重定向符号配合使用。 
## 命令格式
cat [选项] [文件]...
## 命令功能
cat主要有三大功能：
1.一次显示整个文件:cat filename
2.从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.
3.将几个文件合并为一个文件:cat file1 file2 > file
## 命令参数
```
-A, --show-all           等价于 -vET
-b, --number-nonblank    对非空输出行编号
-e                       等价于 -vE
-E, --show-ends          在每行结束处显示 $
-n, --number     对输出的所有行编号,由1开始对所有输出的行数编号
-s, --squeeze-blank  有连续两行以上的空白行，就代换为一行的空白行 
-t                       与 -vT 等价
-T, --show-tabs          将跳格字符显示为 ^I
-u                       (被忽略)
-v, --show-nonprinting   使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外
```
## 常用命令
实例：把 log2012.log 和 log2013.log 的文件内容加上行号（空白行不加）之后将内容附加到 log.log 里。
命令：cat -b log2012.log log2013.log log.log

实例：使用here doc来生成文件
输出：

    [root@localhost test]# cat >log.txt <<EOF
    > Hello
    > World
    > Linux
    > PWD=$(pwd)
    > EOF
    [root@localhost test]# ls -l log.txt
    -rw-r--r-- 1 root root 37 10-28 17:07 log.txt
    [root@localhost test]# cat log.txt
    Hello
    World
    Linux
    PWD=/opt/soft/test
    [root@localhost test]#
实例：tac (反向列示)
命令：tac log.txt

说明：
tac 是将 cat 反写过来，所以他的功能就跟 cat 相反， cat 是由第一行到最后一行连续显示在萤幕上，而 tac 则是由最后一行到第一行反向在萤幕上显示出来！

# nl命令
## 概述
nl 命令在linux系统中用来计算文件中行号。nl 可以将输出的文件内容自动的加上行号！其默认的结果与 cat -n 有点不太一样， nl 可以将行号做比较多的显示设计，包括位数与是否自动补齐 0 等等的功能。  
## 命令格式
nl 命令读取 File 参数（缺省情况下标准输入），计算输入中的行号，将计算过的行号写入标准输出。 在输出中，nl 命令根据您在命令行中指定的标志来计算左边的行。 输入文本必须写在逻辑页中。每个逻辑页有头、主体和页脚节（可以有空节）。 除非使用 -p 标志，nl 命令在每个逻辑页开始的地方重新设置行号。 可以单独为头、主体和页脚节设置行计算标志（例如，头和页脚行可以被计算然而文本行不能）。
## 命令参数
```
-b  ：指定行号指定的方式，主要有两种：
-b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；
-b t ：如果有空行，空的那一行不要列出行号(默认值)；
-n  ：列出行号表示的方法，主要有三种：
-n ln ：行号在萤幕的最左方显示；
-n rn ：行号在自己栏位的最右方显示，且不加 0 ；
-n rz ：行号在自己栏位的最右方显示，且加 0 ；
-w  ：行号栏位的占用的位数。
-p 在逻辑定界符处不重新开始计算。
```
## 命令功能
nl 命令读取 File 参数（缺省情况下标准输入），计算输入中的行号，将计算过的行号写入标准输出。 在输出中，nl 命令根据您在命令行中指定的标志来计算左边的行。 输入文本必须写在逻辑页中。每个逻辑页有头、主体和页脚节（可以有空节）。 除非使用 -p 标志，nl 命令在每个逻辑页开始的地方重新设置行号。 可以单独为头、主体和页脚节设置行计算标志（例如，头和页脚行可以被计算然而文本行不能）。
## 常用命令
实例：用 nl 列出 log2012.log 的内容
命令：nl log2012.log

实例：用 nl 列出 log2012.log 的内容，空本行也加上行号
命令：nl -b a log2012.log

实例3：让行号前面自动补上0,统一输出格式
命令： nl -b a -n rz -w 3 log2014.log 
说明：nl -b a -n rz 命令行号默认为六位，要调整位数可以加上参数 -w 3 调整为3位。

# more命令
## 概述
more命令，功能类似 cat ，cat命令是整个文件的内容从上到下显示在屏幕上。 more会以一页一页的显示方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能 。more命令从前向后读取文件，因此在启动时就加载整个文件。
## 命令格式
more [-dlfpcsu ] [-num ] [+/ pattern] [+ linenum] [file ... ] 
## 命令功能
more命令和cat的功能一样都是查看文件里的内容，但有所不同的是more可以按页来查看文件的内容，还支持直接跳转行等功能。
## 命令参数
```
+n      从笫n行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示  
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
```
## 常用操作命令
	Enter    向下n行，需要定义。默认为1行
	Ctrl+F   向下滚动一屏
	空格键  向下滚动一屏
	Ctrl+B  返回上一屏
	=       输出当前行的行号
	：f     输出文件名和当前行的行号
	V      调用vi编辑器
	!命令   调用Shell，并执行命令 
	q       退出more
## 常用命令
实例：从文件中查找第一个出现"day3"字符串的行，并从该处前两行开始显示输出 
命令：more +/day3 log2012.log

实例4：列一个目录下的文件，由于内容太多，我们应该学会用more来分页显示。这得和管道 | 结合起来 
命令：ls -l  | more -5
说明：每页显示5个文件信息，按 Ctrl+F 或者 空格键 将会显示下5条文件信息。
# less命令
## 概述
less 工具也是对文件或其它输出进行分页显示的工具，应该说是linux正统查看文件内容的工具，功能极其强大。less 的用法比起 more 更加的有弹性。
在more的时候，我们并没有办法向前面翻，只能往后面看，但若使用了less时，就可以使用[pageup] [pagedown] 等按键的功能来往前往后翻看文件，更容易用来查看一个文件的内容，除此之外，在less可以拥有更多的搜索功能，不止可以向下搜，也可以向上搜。
## 命令格式
less [参数]  文件 
## 命令功能
less与more类似，但使用less可以随意浏览文件。而more仅能向前移动，却不能向后移动，而且less在查看之前不会加载整个文件。
## 命令参数
```
-b <缓冲区大小> 设置缓冲区的大小
-e  当文件显示结束后，自动离开
-f  强迫打开特殊文件，例如外围设备代号、目录和二进制文件
-g  只标志最后搜索的关键词
-i  忽略搜索时的大小写
-m  显示类似more命令的百分比
-N  显示每行的行号
-o <文件名> 将less 输出的内容在指定文件中保存起来
-Q  不使用警告音
-s  显示连续空行为一行
-S  行过长时间将超出部分舍弃
-x <数字> 将“tab”键显示为规定的数字空格
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
b  向后翻一页
d  向后翻半页
h  显示帮助界面
Q  退出less 命令
u  向前滚动半页
y  向前滚动一行
空格键 滚动一行
回车键 滚动一页
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页
```
## 常用命令
实例：查看文件
命令：less linux_learning.md

实例：浏览多个文件 
命令：less linux_learning.md java_entry_learning.md 
说明：
输入 ：n后，切换到 log2014.log
输入 ：p 后，切换到log2013.log

实例：查看命令历史使用记录并通过less分页显示
命令：history | less

实例2：ps查看进程信息并通过less分页显示 
命令：ps -ef |less
[Linux进程的基本概念](https://blog.csdn.net/rl529014/article/details/51280018)
## 附加备注
### 全屏导航
ctrl + F - 向前移动一屏
ctrl + B - 向后移动一屏
ctrl + D - 向前移动半屏
ctrl + U - 向后移动半屏
### 单行导航
j - 向前移动一行
k - 向后移动一行
### 其它导航
```
G - 移动到最后一行
g - 移动到第一行
q / ZZ - 退出 less 命令
```
### 其它有用的命令
```
v - 使用配置的编辑器编辑当前文件
h - 显示 less 的帮助文档
&pattern - 仅显示匹配模式的行，而不是整个文件
```
### 标记导航
当使用 less 查看大文件时，可以在任何一个位置作标记，可以通过命令导航到标有特定标记的文本位置：
ma - 使用 a 标记文本的当前位置
'a - 导航到标记 a 处

# head命令
## 概述
head 与 tail 就像它的名字一样的浅显易懂，它是用来显示开头或结尾某个数量的文字区块，head 用来显示档案的开头至标准输出中，而 tail 想当然就是看档案的结尾。
## 命令格式
head [参数]... [文件]...  
## 命令功能
head 用来显示档案的开头至标准输出中，默认head命令打印其相应文件的开头10行。
## 命令参数
```
-q 隐藏文件名
-v 显示文件名
-c<字节> 显示字节数
-n<行数> 显示的行数
```
## 常用命令
实例：显示文件的前n行
命令：head -n 5 log2014.log

实例：文件的除了最后n个字节以外的内容 
命令：head -c -32 log2014.log

实例：输出文件除了最后n行的全部内容
命令：head -n -6 log2014.log

# tail命令
## 概述
tail 命令从指定点开始将文件写到标准输出.使用tail命令的-f选项可以方便的查阅正在改变的日志文件,tail -f filename会把filename里最尾部的内容显示在屏幕上,并且不但刷新,使你看到最新的文件内容. 
## 命令格式
tail[必要参数][选择参数][文件]   
## 命令功能
用于显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。
## 命令参数
```
-f 循环读取
-q 不显示处理信息
-v 显示详细的处理信息
-c<数目> 显示的字节数
-n<行数> 显示行数
--pid=PID 与-f合用,表示在进程ID,PID死掉之后结束. 
-q, --quiet, --silent 从不输出给出文件名的首部 
-s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒
```
## 常用命令
实例：循环查看文件内容
命令：tail -f test.log
>[root@localhost ~]# ping 192.168.120.204 > test.log &
    [1] 11891[root@localhost ~]# tail -f test.log 
    PING 192.168.120.204 (192.168.120.204) 56(84) bytes of data.
    64 bytes from 192.168.120.204: icmp_seq=1 ttl=64 time=0.038 ms
    64 bytes from 192.168.120.204: icmp_seq=2 ttl=64 time=0.036 ms
    64 bytes from 192.168.120.204: icmp_seq=3 ttl=64 time=0.033 ms
    64 bytes from 192.168.120.204: icmp_seq=4 ttl=64 time=0.027 ms
    64 bytes from 192.168.120.204: icmp_seq=5 ttl=64 time=0.032 ms
    64 bytes from 192.168.120.204: icmp_seq=6 ttl=64 time=0.026 ms
    64 bytes from 192.168.120.204: icmp_seq=7 ttl=64 time=0.030 ms
    64 bytes from 192.168.120.204: icmp_seq=8 ttl=64 time=0.029 ms
    64 bytes from 192.168.120.204: icmp_seq=9 ttl=64 time=0.044 ms
    64 bytes from 192.168.120.204: icmp_seq=10 ttl=64 time=0.033 ms
    64 bytes from 192.168.120.204: icmp_seq=11 ttl=64 time=0.027 ms
    [root@localhost ~]#
    
说明：ping 192.168.120.204 > test.log & //在后台ping远程主机。并输出文件到test.log；这种做法也使用于一个以上的档案监视。用Ctrl＋c来终止。 

>     编译：peida  
    链接：https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html
    