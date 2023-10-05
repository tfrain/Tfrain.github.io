---
title: Vim实用技巧
date: '2019-01-15 11:45:00 +0800'
tags: []
categories: Vim
abbrlink: 12221
---

<blockquote class="blockquote-center">**希望由厚至薄**</blockquote><br /><!-- more -->

![](https://cdn.nlark.com/yuque/0/2019/jpeg/203310/1547523970324-ad085afb-d91a-4b7a-bc5e-07c6133eeca7.jpeg#align=left&display=inline&height=614&linkTarget=_blank&originHeight=693&originWidth=552&size=0&status=done&width=489)
<a name="a4d3b02a"></a>
# 概述
 学习Vim，最难受的就是它对新手出名的不友好，网上一大堆乱七八糟的东西，还是自己进行学习对自己的帮助最大。建议首先学习 :vimtutor 入门vim学习。最好会盲打，自己看了这本 vim 实用技巧。
<a name="454d0617"></a>
# 第 1 章 Vim解决问题的方式
{char} 是指任意字符<br /><CR> 指<Enter><br />cw会删除光标位置到当前词位置结尾处的文本，并进入插入模式<br />>G是首行缩进<br />C=c$ 删除到行尾再插入<br />o=A<CR>下一行插入<br />s删除光标处再插入<br />@：重复命令行命令<br />&重复替换命令<br />f{char} 搜索，; 下一个字符，, 上一个字符<br />* 可以查看当前光标下的单词<br />理想模式：用一个键移动，另一键执行。又称为 “.范式”。
<a name="d65edfb7"></a>
# 第一部分 模式
Vim 提供一个区分模式的用户界面，就是说在 Vim 中按键盘上的任意键所产生的结果可能会不一样，而这取决于当前正处于哪种模式，以及如何在各模式间切换，是极其重要的。在本书的这一部分，我们将学习每种模式的工作方式及其用途。
<a name="f5859b09"></a>
## 第 2 章 普通模式
b 把光标移动到单词开头<br />daw 在单词末尾也能删除<br /><c-a> 在数字上执行加一，不在数字上，在当前行正向查找一个数字，10<c-a><br /><c-x> 在数字上执行减一<br />最好不要用数字 d2w 这样，因为 . 能很好代替，但是 c3w 有用，行中间来快速进行修改<br />g~ 反转大小写，gu 转成小写，gU转成大写。gUap 将一段转换为大写，g 当成操作符前缀<br />gc{motion} 切换为注释状态，gcap 切换当前段落的注释状态。gcG 当前行到文件结尾间的所有内容注释掉，gcc 注释当前行，gg=G 自动缩进整个文件。
<a name="e67876bd"></a>
## 第 3 章 插入模式
在输入错误时，专业打字员会建议先删除整个单词，然后再重新输入一遍。<br /><c-h> 删除前一个字符（同退格键）<c-w> 删除前一个单词<c-u> 删至行首。<br /><c-[>切换到普通模式，<c-o> 切换到插入-普通模式。在此模式中，可以执行一个普通模式命令，执行完后，马上又返回到插入模式

| 按键操作 | 缓冲区内容 |  |
| --- | --- | --- |
| yt,  | Practical Vim, by Drew Neil<br />Read Drew Neil's |  |
| jA␣ | Practical Vim, by Drew Neil<br />Read Drew Neil's |  |
| <C-r>0 | Practical Vim, by Drew Neil<br />Read Drew Neil's Practical Vim |  |
| .<Esc> | Practical Vim, by Drew Neil<br />Read Drew Neil's Practical Vim. |  |

yt, 命令把“Practical Vim”复制到复制专用寄存器中,<C-r>0 把刚才复制的文本粘贴到光<br />标所在位置<br />= 符号指明使用表达式寄存器,<C-r>=6*35<CR>，将执行结果插入到文档的当前位置<br /><C-v>{code}根据字符编码插入字符，{code} 是要插入字符的编码，<C-v>065插入A<br /><C-v>u{1234} 以十六进制字符编码插入字符<br />ga 分别以十进制和十六进制的形式显示出其字符编码<br /><C-k>{char1}{char2} 插入以**二合字母**{char1}{char2}表示的字符，<C-k>?I 表示的“¿”字符，二合字母 12 指1⁄2<br />R 命令可以由普通模式进入替换模式，“,␣b” 替换原有的“. ␣ B”字符<br />gR 进入虚拟替换模式(Virtual Replace mode)，把制表符当成一组空格进行处理，输入制表符占据的最后一个字符，该字符会替换制表符。
<a name="4e7f5ecd"></a>
## 第 4 章 可视模式
viw 来高亮选择这个词,用 c 命令进行修改<br />V 激活面向行的可视模式<br /><C-v> 激活面向列块的可视模式<br />gv 重选上次的高亮选区<br />o 切换高亮选区的活动端，vbb ，o ，e<br />重复执行面向行的可视命令，Vj ，>.<br />vit 可被解读为高亮选中标签内部的内容(visually select inside the tag),it 命令是一种被称为文本对象(text object)<br />gUit 要优于 vitU 命令，首选操作符命令，再者是可是模式命令，可视模式擅长一次性处理和动作命令难以构建的文本范围<br />技巧24 面向列块的可是模式编辑表格数据，在一行下生成分割线 yyp，Vr-<br />列块可视模式,插入操作只影响顶行，但实际影响所有，插入模式时间很短暂<br />I 命令把光标置于当前行的开头
<a name="007fa2d7"></a>
## 第 5 章 命令行模式
有些命令在插入模式和命令行模式中可以通用。例如,可以用 <C-w> 和 <C-u>分别删除至上个单词的开头及行首,也可以用 <C-v> 或 <C-k> 来插入键盘上找不到的字符,还可以用 <C-r>{register} 命令把任意寄存器的内容插入到命令行。Ex 命令可以在任意位置执行

:3d 等于 3G dd 一定程度上要比普通模式命令要快<br />. 代表当前行的地址，:.,$d 这样的命令可能很实用<br />% 代表当前文件中的所有行，:%s/Practical/Pragmatic/<br />可视模式加命令行模式，VG，输入 ：命令行上就会预先填充一个范围 :'<,'> 。代表高亮选区的范围<br />:6copy. 命令解读为“为第 6 行创建一份副本,并放到当前行下方”，:copy 简写:co 或是 :t<br />:t6 把当前行复制到第 6 行下方，:t$ 把当前行复制到文本结尾<br />快速跳回原先的位置( <C-o> )，在复制距离较远的行时, :t 命令通常更加高效。<br />: yyp 会使用寄存器，不想覆盖默认寄存器中的当前内容时，可以考虑使用 :t. 来复制行<br />:'<,'>m$ 等于 :'<,'>m$，重复上次的 Ex 命令 @:<br />'<,'>normal . 命令可以解读为“对高亮选区中的每一行,对其执行普通模式下的 . 命令”。<br />:%normal i// 把整个 JavaScript 文件注释掉<br />:normal 命令则让我们可以把具有强大表现力的 Vim 普通模式命令与具有大范围影响力的 Ex 命令结合在一起<br />遍历缓冲区列表的条目，:bn[ext] 可以在列表中逐项正向移动,而 :bp[revious] 命令则进行反向移动

逐个查看每个缓冲区 :bnext，@: 命令和:bprevious 命令可能会出现反向遍历缓冲区列表，将人搞糊涂，更好用<C-o> 命令，该命令会回到跳转列表的上条记录。想往回跳,就用 <C-o> 命令。

<C-d> 命令会让 Vim 显示可用的补全列表，按 <Tab> 键依次显示<br /><C-r><C-w> 用于插入光标下的单词，插入光标下的字串<C-r><C-a>，一般和 * 、:%s 一起使用，:%s//<C-r><C-w>/g<br />命令行窗口就像是一个常规的 Vim 缓冲区,只不过它的每行内容都对应着命令历史中的一个条目。我们可以用 k 及 j 键在历史中向前或向后移动,也可以用 Vim 的查找功能查找某一行。在按下 <CR> 键时,将会把当前行的内容当成 Ex 命令加以执行。好处是强大的vim编辑能力可以派上用场。<br />q: 调出命令行窗口，J 命令合并下一行，命令行窗口处于打开状态时,它会始终拥有焦点。<br /><Ctrl-f> 从命令行模式切换到命令行窗口，已经输入到命令行上的内容仍然会得以保留<br />:!ls 执行 Shell 中的程序，在 Vim 的命令行中,符号 % 代表当前文件名(指调用了shell程序时)<br />执行几条命令:shell 命令来启动一个交互的 shell 会话,用 exit 命令可以退出此 shell 并返回 Vim<br />把 Vim 置于后台，看书 p 94 <br />命令会产生大量输出，用:read !{cmd} 命令，它让我们把命令的标准输出重定向到缓冲区。<br />:write !{cmd} 做相反的事。它把缓冲区内容作为指定 {cmd} 的标准输入<br />:write! sh 把缓冲区内容写到一个名为 sh 的文件，叹号放得位置不同,命令的作用]也大相径庭。<br />:write !sh 命 令 的 作 用 是 在 shell 中 执 行 当 前 缓 冲 区 中 的 每 行 内 容<br />Vim 把过滤器定义为“一个由标准输入读取文本,并对其进行某种形式的修改后输出到标准输出的程序”<br />:2,$!sort -t',' -k2，命令行结合 shell 来对文本进行处理。<br />Vim 提供了一种方便的快捷方式来设置 :[range]!{filter} 命令中的范围。我们可以用 !{motion} 操作符切换到命令行模式,并把指定 {motion} 所涵盖的范围预置在命令行上，如果我们把光标移到第 2 行,然后执行 !G ,Vim 就会打开命令行并把范围 :.,$! 预置在命令行上。虽然此后我们仍需输入剩下的 {filter} 命令,但这毕竟节省了部分工作。<br />:read !{cmd} 在 shell 中执行 {cmd} ,并把其标准输出插入到光标下方<br />:[range]write !{cmd} 在 shell 中执行 {cmd} ,以 [range] 作为其标准输入<br />:[range]!{filter} 使用外部程序 {filter} 过滤指定的 [range]
<a name="b76203f4"></a>
# 第二部分 文件
在本书的这一部分，我们将学习如何使用文件及缓冲区。Vim 允许在一个编辑会话中编辑多个文件，我们既可以每次显示一个文件，也可以把工作区分成若干个分割窗口或标签页，每个窗口或标签页包含一个独立的缓冲区。另外，我们还会看到在 Vim 中打开文件的机种不同方式，并掌握一些方法来解决无法把缓冲区保存到文件的问题。
<a name="d239b0a0"></a>
## 第 6 章 管理多个文件
我们编辑的只是内存中的映像，也就是 Vim 术语中的“缓冲区”。 

:ls 命令会列出所有被载入到内存中的缓冲区的列表， :bnext 命令可以切换到列表中的下一个缓冲区，% 符号指明哪个缓冲区在当前窗口中可见，而 # 符号则代表轮换文件。按 <C-^> 可以在当前文件和轮换文件间快速切换。

:bprev (bp) 和 :bnext (bn)在列表中反向或正向移动；而 :bfirst 和 :blast 则分别跳到列表的开头和结尾

```bash
《 1 #  "a.txt"   line 1
	 2 %a  "b.txt"   line 1 
```

:buffer N 命令直接凭编号跳转到一个缓冲区，:buffer {bufname} 格式实现同样的功能。{bufname} 只需包含文件路径中 足以唯一标识此缓冲区的字符即可

删除缓冲区，可以用 :bdelete 命令, :5,10bd ,删除编号 5～10（包含 5 和 10）的缓冲区

用 :argdo 命令可以在参数列表中的每个文件上执行一条 Ex 命令。 当不带参数运行 :args 命令时，它会打印当前参数列表的内容。 :args {arglist} {arglist} 可以包括文件名、通配符，甚至是一条 shell 命令的输出结果

填充参数列表最简单的方式是逐一指定文件的名字：➾ :args index.html app.js  ** 通配符也匹配 0 个或多个字符，但它可以递归进入指定目录的子目录 :args **/*.js ,  :args **/*.js **/*.css  :args `cat .chapters`

按 Go 在缓冲区的结尾增加一个空行,缓冲区 a.txt 前有一个 + 号，表示这个缓冲区被修改过了,被标记为 h，表示它是一个隐藏缓冲区（hidden）

:w[rite] 把缓冲区内容写入磁盘 :e[dit]! 把磁盘文件内容读入缓冲区（即回滚所做修改） :qa[ll]! 关闭所有窗口，摒弃修改而无需警告 :wa[ll]! 把所有改变的缓冲区写入磁盘 

启用‘hidden’选项,运行完 :argdo {cmd} 后,一切正常，可以运行 :argdo write （或 :wall）来保存所有的缓冲区。

用 <C-w>s 命令可以水平切分此窗口，使之成 为两个高度相同的窗口；或者可以用 <C-w>v 命令对其进行垂直切分，这样会产生两 个宽度相同的窗口

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550644590245-77a4763f-ed46-470e-9a1d-4512ea7167ac.png#align=left&display=inline&height=503&linkTarget=_blank&name=image.png&originHeight=503&originWidth=685&size=34313&status=done&width=685)<br />编辑长文件时,可以滚动其中一个窗口，使之显示缓冲区的一部分，这样，在修改第二 个窗口中缓冲区的另外一部分时，就可以参考第一个窗口中的内容。

:sp[lit] {file} 水平切分当前窗口，并在新窗口中载入{file} :vsp[lit] {file} 垂直切分当前窗口，并在新窗口中载入{file}<br /><C-w>w 在窗口间循环切换 <C-w>h 切换到左边的窗口 <C-w>j 切换到下边的窗口 <C-w>k 切换到上边的窗口 <C-w>l 切换到右边的窗口,按住 <Ctrl> 键，然后再输入 ww （或 wj ，或上表中的其他命令）来切换活动窗口。 

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550645102529-39f26124-6f39-4015-9320-753465134bd9.png#align=left&display=inline&height=152&linkTarget=_blank&name=image.png&originHeight=152&originWidth=842&size=25654&status=done&width=842)

<C-w>= 使所有窗口等宽、等高 <C-w>_ 最大化活动窗口的高度 <C-w>|  最大化活动窗口的宽度 [N]<C-w>_  把活动窗口的高度设为[N]行 [N]<C-w>| 把活动窗口的宽度设为[N]列,用鼠标做最好

用 :edit 命令打开一个文件时，Vim 却不会自动创建一 个新标签页，而是会创建一个新缓冲区，并把该缓冲区显示到当前窗口。应该把标签页想成容纳一系 列窗口的容器

:lcd {path} 命令让我们可以设置当前窗口的本地工作目录。如果我们创建了一 个新标签页，并用 :lcd 命令切换到另一个目录，那么就可以把每个标签页限制在不 同的工程范围内。用 :tabedit {filename} 命令可以打开一个新的标签页，如果省略了 {filename} 参数的话，那么 Vim 会创建一个新标签页，里面包含一个空缓冲区

<C-w>T 命 令把当前窗口移到一个新标签页中 :tabc[lose] 关闭当前标签页及其中的所有窗口 :tabo[nly] 只保留活动标签页，关闭所有其他标签页<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550645990944-5586df98-b275-4ac8-9663-185a464c59af.png#align=left&display=inline&height=199&linkTarget=_blank&name=image.png&originHeight=199&originWidth=896&size=36002&status=done&width=896)

 :tabmove [N] 命令可以重新排列标签页。省略了 [N]，当前标签页会被移到结尾，如果支持鼠标，则用鼠标拖拽

<a name="a185fab5"></a>
## 第 7 章 打开及保存文件
:edit {file} 命令可以接受相对于工作目录的文件路径

% 符号代表活动缓冲区的完整文件路径，:h 修饰符会去除文件名，但保留路径中的其他部分 :edit %:h<Tab>M<Tab> 

 $ vim . 在按<CR> 键时，Vim 会打开光标下的条 目。如果光标位于目录上，那么此窗口的内容会更新为该目录的内容；如果光标位于文件上，那么该文件会被载入一个缓冲区里，并把它显示在当前窗口中。这将导致当 前窗口中的文件管理器被该缓冲区的内容所替代<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550646730436-643f6d61-8093-40cb-a791-42b31a95f6a4.png#align=left&display=inline&height=464&linkTarget=_blank&name=image.png&originHeight=464&originWidth=807&size=97939&status=done&width=807)

:edit . :e. 打开文件管理器，并显示当前工作目录 :Explore :E 打开文件管理器，并显示活动缓冲区所在的目录 :E 及 :e. 命令表现得有些古怪，因为它们会用文件管理器替换掉当前窗口的内容，想象成一张纸牌，如果在调出文 件管理器后，又想切换回刚才正在编辑的那个文件，此时可以使用 <C-^> 命令。 

杀手级功能，其名字正因为此功能而来，即 netrw 可 以通过网络读写文件。该插件可以利用多种协议读写网络文件，包括 scp、ftp、curl 及 wget，这取决于你的系统上可以用哪些协议。（手动流汗）

<C-g> 命令用于显示当前文件的文件名及状态，以超级用户执行，tee /etc/hosts > /dev/null。这条命令会把缓冲区的内容当作标准输入，并用它来覆盖 /etc/hosts 文件的内容，下面文件与缓冲区的内容刚好是完全一致的。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1550647263953-ba725e78-53c9-4888-a1c3-01bf77f715ab.png#align=left&display=inline&height=233&linkTarget=_blank&name=image.png&originHeight=233&originWidth=747&size=32937&status=done&width=747)
<a name="3852f4b5"></a>
# 第三部分 更快地移动及跳转
动作命令是进行 Vim 操作的最重要的一些命令。我们不仅可以用它们四处移动光标，还能够用它们与操作符待决模式配合使用，指定一段文本范围并在其上进行操作。在本书的这一部分，我们将结识一些最为有用的动作命令，另外，我们还会学习 Vim 的跳转命令，这些命令让我们可以在文件间快速地跳转。
<a name="ec48adac"></a>
## 第 8 章 用动作命令在文档中移动
我们不用把手从本位行上移开，就可以上下左右移动，操作符待决模式中最出彩的明星是文本对象<br />如果你在一行中连续按了两次以上的 h 键，那就是在浪费时间（手动流汗）。

即 j、k、0和 $ 都用于操作实际行，而如果在这些 键前加上 g 前缀的话，就会让 Vim 对屏幕行进行操作

w 正向移动到下一单词的开头   (for-)word<br />b 反向移动到当前单词/上一单词的开头  back-word<br />e 正向移动到当前单词/下一单词的结尾<br />ge 反向移动到上一单词的结尾<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551021099056-92eee3a8-553a-4244-a911-5215fed7c090.png#align=left&display=inline&height=241&linkTarget=_blank&name=image.png&originHeight=301&originWidth=542&size=46783&status=done&width=434)<br />ea 命令连在一起可被解读为“在当前单词结尾后添加”<br />gea 命令当成“在上一单词结尾后 添加”的命令

我们之前遇到过的每个面向单词的动作命令，都有一个面向字串的命令与其对 应，这当中包括 W、B、E和 gE<br />一个单词由字母、数字、下划线，或其他非空白字符的序列组成，单词间以空白 字符分隔，字串的定义则更简单，它由非空白字符序列组成， 字串间以空白字符分隔

Vim 会记录 上次执行过的 f{char} 命令，随后用 ; 命令就可以重复该命令了，用 , 命令就可以再跳回来<br />f{char} 正向移动到下一个 {char} 所在之处<br />F{char} 反向移动到上一个 {char} 所在之处<br />t{char} 正向移动到下一个 {char} 所在之处的前一个字符上<br />T{char} 反向移动到上一个 {char} 所在之处的后一个字符上<br />; 重复上次的字符查找命令<br />, 反转方向查找上次的字符查找命令<br /> f,dt.训练成手指的下意识动作（删除 , 和 . 之间的内容）

缺省的<Leader> 键是 \

查找命令不仅限于在普通模式下使用，我们也可以在可视模式及操作符待决模式 中使用它，用来完成实际的工作<br />删除工作会更方便，先高亮然后通过命令行模式进行大范围选择。<br />d/ge<CR> 用 /ge<CR> 查找动作告诉 d{motion} 命令删除什么。查找命令是 一个开动作，也就是说，虽然光标是在单词“gets”开头的“g”上的，但此字符却被 排除在删除操作之外，用 v 还需要 h 一下<br />把 d{motion} 操作符与查找动作结 合在一起使用，这是个很大的进步，你可以好好在朋友和同事们面前炫耀一番了

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551022390533-baf49e0f-bcdf-4264-bee3-76f4eb4e25f8.png#align=left&display=inline&height=427&linkTarget=_blank&name=image.png&originHeight=534&originWidth=578&size=49815&status=done&width=462)

可以把 i 想成“inside”，而把 a 想成 “around” 或“all”。<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551022505589-cada3bcd-b055-427d-a850-31630f07c346.png#align=left&display=inline&height=453&linkTarget=_blank&name=image.png&originHeight=566&originWidth=484&size=75169&status=done&width=387)

文本对象自身并不是动作命令，我们不能用它们在文档中移动。但是我们却可以 在可视模式及操作符待决模式中使用文本对象 ：每当在命令语法里看到 {motion} 时，你也可以在这个地方使用文本对象，常见的例子包括 d{motion}、 c{motion}和 y{motion} <br />把 ci" 命令解读为“修改双引号内部的内容”，把 cit 命令解读为“修 改标签内部的内容”。另外，我们也可以很容易地用 yit 命令拷贝标签内的文本，或 者是用 dit 删除这些文本。

如果说 f{char} 和 /pattern<CR> 命令如同单足飞踹， 那么文本对象则像是一次攻击两个目标的剪刀腿<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551022681107-241777fb-ce43-4d52-819c-c55c1b28e6c7.png#align=left&display=inline&height=218&linkTarget=_blank&name=image.png&originHeight=272&originWidth=685&size=31159&status=done&width=548)

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551022790391-f03ad92b-de0b-4381-9ce9-7ac70b68ef19.png#align=left&display=inline&height=279&linkTarget=_blank&name=image.png&originHeight=349&originWidth=350&size=28484&status=done&width=280)<br />iw 和 aw 之间的区别很微妙，为什么会需要这样两个文本对象呢？<br />ciw 命令只删除该单词，而不删除其前后的空白字符，随后它会进入插入模式， 这刚好是我们想要的效果。如果用的是 caw 的话，那最后两个单词就会连在一起<br />一般来说，d{motion} 命令和 aw、as 和 ap 配合起来使用比较好，而 c{motion} 命令和 iw 及类似的文本对象一起用效果会更好。

m{a-zA-Z} 命令会用选定的字母标记当前光标所在位置,mm 和 `m 命令是一对便于使用的命令，它们分别设置位置标记 m，以及跳转到 该标记<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551060576906-eb4d92e6-28f9-40f9-8c9c-4be5ccba3c49.png#align=left&display=inline&height=209&linkTarget=_blank&name=image.png&originHeight=262&originWidth=438&size=34262&status=done&width=350)<br />% 命令允许我们在一组开、闭括号间跳转,在执行 % 命令时，Vim 会 自动为发生跳转的地方设置一个位置标记, % 命令只能用在配对的括号上,所以利用替换命令时最好利用位置标记，防止陷阱。
<a name="08071332"></a>
## 第 9 章 在文件间跳转
:jumps 查看跳转列表的内容，如果我们运行 :edit 命令 打开了一个新文件，那么就可以用 <C-o> 和 <C-i> 命令在这个新文 件以及原本的文件之间来回跳转，会始终在 当前活动窗口的跳转列表范围内进行跳转， Vim 本来就把 <C-i> 和 <Tab> 当成同一个东西。映射需谨慎。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551063629792-edf970a6-eef3-440f-95bf-5eb3cff4325f.png#align=left&display=inline&height=242&linkTarget=_blank&name=image.png&originHeight=303&originWidth=593&size=47322&status=done&width=474)<br />Vim 会在编辑会话期间维护一张表，里面记载我们对每个缓冲区所做的修改， 此表就是所谓的改变列表 :changes，用 g; 和 g, 命令反向或正向遍历改变列表。改变列表中则保存了多组位置。我们可以多次按 g; 命令，每次它都会把 我们带到改变列表中较早的一个位置，而 `. 则总是把我们带到改变列表的最后一项。

执行 gf 命令“go to file”加上 .rb 扩展名，用 ‘suffixesadd’ 选项做到这一点 :set suffixesadd+=.rb<br />查看 'path' 选项的值<br />:set path?<br />《 path=.,/usr/include,,<br /><C-]> 命令的作用也类似。它也需要进行一些配置（在技巧 102 中讨论），然而 一旦正确配置好，它就允许我们从函数调用的地方直接跳到该函数定义的地方

用两次按键就可以打开你的 vimrc 文件，先打开你的 vimrc 文件，按 mV 设置一个全局标记（助记词 V 代 表 vimrc），然后切换到另一个文件中按 `V

缺省情况下，:vimgrep 会直接跳到它所找到的第一处匹配上，这或许会切换到 另外一个文件。<br />一般来说，要养成在使用与 quickfix 列表有关的命令前，如:grep、:vimgrep 及:make，设置全局标记的习惯。另外，在执行与缓冲区列表或参数列表有关的命令前， 如:args {arglist}和:argdo（参见技巧 37），也要设置全局标记。 你总共可以设置 26 个全局位置标记，可以迅速跳回。

<a name="2e0bcfbf"></a>
# 第四部分 寄存器
Vim 的寄存器是一组用于保存文件的简单容器。它们既可像剪贴板那样，剪切、复制和粘贴文本；也可以记录一系列按键操作，把它们录制成宏。通过本书的这一部分，我们将掌握这一核心功能。
<a name="59b9a56d"></a>
## 第 10 章 复制与粘贴
xp，可被用于“调换光标之后的两个字符”ddp，可被用于“调换当前行和它的下一行” 

diw 命令不仅删除了单词，而且还将它拷贝到了无名寄存器，按 P时得到的是刚刚删除的单词，而不是之前复制的单词，给命令加 "{register} 前缀的方式指定要用的寄存器，Vim 将缺省使用无 名寄存器。"ayiw复制，用 "bdd删除，"ap粘贴，可以解决无名寄存器的问题，使用复制寄存器也可以解决，黑洞集训器从删除方面也可以解决

Vim 的 delete 命令也与标准剪切操作的作用一致。也就是说，该命令会先把 指定文本复制到寄存器后再从文档中删掉，引用黑洞寄存器，"_d{motion}会执行真正的删除操作。

无名寄存器（""）， ""p，它完全等同于 p命令，x 和 d{motion} 经常被当作“删除”命 令。这其实是用词不当，把它们理解为“剪切”命令会更合适

复制专用寄存器（"0）使用 y{motion} 命令时，要复制的文本不仅会被拷贝到无名寄存器中，而且也被拷贝到了复制专用寄存器中，因为专用，只有 y 能触发

检查无名寄存器和复制专用寄存器的内容，:reg "0 ，小问题用复制专用寄存器，如果碰到需要将一段或多段文本粘贴到多处的情况，有名寄存器就会大显神通。用小写字母引用有名寄存器，会覆盖该寄存器的原有内容，而换用大写字母的话，则会将新内容添加到该寄存器的原有内容之后

如果我们在外部程序中用剪切或复制命令获取了文本，就可以通过 "+p 命令（或 在插入模式下用 <C-r>+）将其粘贴到 Vim 内部。相反地，如果在 Vim 的复制或删除 命令之前加入 "+ ，相应的文本将被捕获至系统剪贴板。<br />"+ X11 剪贴板，用剪切、复制与粘贴命令操作 "* X11 主剪贴板，用鼠标中键操作把它们粘贴出来，Windows与Mac OS X操作系统并没有主剪贴板的概念，因此 "+ 寄存器与 "* 寄 存器可以混用，它们都代表系统剪贴板。

表达式寄存器（"=）当我们从表达式寄存器获取内容时，Vim 将跳到命 令行模式，并显示提示符“=”。这时，我们可以输入一段 Vim 脚本表达式并按 <CR> 执行，如果返回的是字符串（或者可被强制转换成字符串的数据），Vim 将会使用它

只读寄存器 "% 当前文件名 "# 轮换文件名 ". 上次插入的文本 ": 上次执行的Ex命令 "/ 上次查找的模式 

在可视模式下使用 p 命令时，Vim 将用我们指定的寄存器内容来替换高亮选区中的文本，可视再次解决了文本"丢失"现象，我们输入 u 撤销上次的修改。然后，按 gv重选上一次高亮选区的内容，再按一次 p键。发生了什么？显然什么也没发生，第一次使用 p时，之所以成功，是因为无名寄存器恰巧包含了我们想要的 文本。但在第二次使用 p时，无名寄存器包含的是被覆盖的内容，所以可是模式替换内容也会进入无名寄存器

在 Vim 的可视模式下使用 p命令时。首先，从无名寄存器里取出内容，然后，把高亮选区中的内容存入无名寄存器。（花里胡哨）

![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551176775970-4a023ff6-26fa-4f41-8fb3-ecab6fe9c7da.png#align=left&display=inline&height=125&linkTarget=_blank&name=image.png&originHeight=125&originWidth=364&size=13396&status=done&width=364)<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/203310/1551176803751-7d556e52-aa61-4993-8056-4abf12f643c7.png#align=left&display=inline&height=174&linkTarget=_blank&name=image.png&originHeight=174&originWidth=363&size=15099&status=done&width=363)<br />c3w命令删除“chips and fish”并重新输入“fish and chips”， 应该会更快地完成任务。但是，以上方法可被用于交换更长的短语

p 命令旨在将寄存器中的文本粘贴到光标之后，P 命令用于将文本插入到光标之前，puP 和 Pup几乎成了下意识动作。当要粘贴的内容来自于面向行的寄存器时，p 和 P 命令会把它们粘贴至当前行的 上一行或下一行。这一点比面向字符的行为更直观

在插入模式下，我们可以通过输入 <C-r>" 来插入无名寄存器的内容，或者输入 <C-r>0来插入复制专用寄存器的内容<br />gp和 gP命令也值得关注，它们会把光标的位置移到被粘贴出来的文本结尾而不是开头。 当复制多行文本时，gP命令尤为管用，P 和 gP 命令区别

如果你运行的 Vim 是已集成系统剪贴板的版本，就可以完全避免与'paste' 选项打交道了。普通模式下的 "+p 命令用来粘贴加号寄存器中的内容，即系统剪 贴板的镜像。
<a name="b51d83bf"></a>
## 第 11章 宏


