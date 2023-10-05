---
title: LInux学习5
date: '2019-01-28 22:24:23 +0800'
tags: []
categories: Linux
abbrlink: 16814
---

<blockquote class="blockquote-center">**网络命令**</blockquote><br /><!-- more -->
>       编译：peida     
>       链接：https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html

# ifconfig命令
## 概述
许多Windows非常熟悉ipconfig命令工具，它被用来获取网络接口配置信息并对此进行修改。Linux系统拥有类似的工具，也就是ifconfig（interfaces config）。通常需要以root身份登录或者使用sudo以便在LInux机器上使用ifconfig工具。依赖于ifconfig命令中使用一些选项属性，ifconfig工具不仅可以被用来简单地获取网络接口配置信息等，还可以修改这些配置
## 命令格式
ifconfig[网络设备][参数]
## 命令参数

```
up 启动指定网络设备/网卡。
down 关闭指定网络设备/网卡。该参数可以有效地阻止通过指定接口的IP信息流，如果想永久地关闭一个接口，我们还需要从核心路由表中将该接口的路由信息全部删除。
arp 设置指定网卡是否支持ARP协议。
-promisc 设置是否支持网卡的promiscuous模式，如果选择此参数，网卡将接收网络中发给它所有的数据包
-allmulti 设置是否支持多播模式，如果选择此参数，网卡将接收网络中所有的多播数据包
-a 显示全部接口信息
-s 显示摘要信息（类似于 netstat -i）
add 给指定网卡配置IPv6地址
del 删除指定网卡的IPv6地址
<硬件地址> 配置网卡最大的传输单元
mtu<字节数> 设置网卡的最大传输单元 (bytes)
netmask<子网掩码> 设置网卡的子网掩码。掩码可以是有前缀0x的32位十六进制数，也可以是用点分开的4个十进制数。如果不打算将网络分成子网，可以不管这一选项；如果要使用子网，那么请记住，网络中每一个系统必须有相同子网掩码。
tunel 建立隧道
dstaddr 设定一个远端地址，建立点对点通信
-broadcast<地址> 为指定网卡设置广播协议
-pointtopoint<地址> 为网卡设置点对点通讯协议
multicast 为网卡设置组播标志
address 为网卡设置IPv4地址
txqueuelen<长度> 为网卡设置传输列队的长度
```
## 常用命令
实例：显示网络设备信息（激活状态的）<br />命令：ifconfig<br />[root@localhost ~]# ifconfig<br />eth0      Link encap:Ethernet  HWaddr 00:50:56:BF:26:20  <br />          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0<br />          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1<br />          RX packets:8700857 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:31533 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:1000 <br />          RX bytes:596390239 (568.7 MiB)  TX bytes:2886956 (2.7 MiB)<br />lo        Link encap:Local Loopback  <br />          inet addr:127.0.0.1  Mask:255.0.0.0<br />          UP LOOPBACK RUNNING  MTU:16436  Metric:1<br />          RX packets:68 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:68 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:0 <br />          RX bytes:2856 (2.7 KiB)  TX bytes:2856 (2.7 KiB)<br />说明：eth0表示第一块网卡，其中HWaddr表示网卡的物理地址，可以看到目前这个网卡的物理地址（MAC地址）是 00:50:56:BF:26:20<br />inet addr 用来表示网卡的IP地址，此网卡的 IP地址是 192.168.120.204，广播地址， Bcast:192.168.120.255，掩码地址Mask:255.255.255.0 <br />lo 是表示主机的回坏地址，这个一般是用来测试一个网络程序，但又不想让局域网或外网的用户能够查看，只能在此台主机上运行和查看所用的网络接口。比如把 HTTPD服务器的指定到回坏地址，在浏览器输入 127.0.0.1 就能看到你所架WEB网站了。但只是您能看得到，局域网的其它主机或用户无从知道。<br />第一行：连接类型：Ethernet（以太网）HWaddr（硬件mac地址）<br />第二行：网卡的IP地址、子网、掩码<br />第三行：UP（代表网卡开启状态）RUNNING（代表网卡的网线被接上）MULTICAST（支持组播）MTU:1500（最大传输单元）：1500字节<br />第四、五行：接收、发送数据包情况统计<br />第七行：接收、发送数据字节数统计信息。<br /><br /><br />实例：启动关闭指定网卡<br />命令：<br />ifconfig eth0 up<br />ifconfig eth0 down<br />说明：ifconfig eth0 up 为启动网卡eth0 ；ifconfig eth0 down 为关闭网卡eth0。ssh登陆linux服务器操作要小心，关闭了就不能开启了，除非你有多网卡。

实例：为网卡配置和删除IPv6地址<br />命令：<br />ifconfig eth0 add 33ffe:3240:800:1005::2/64<br />ifconfig eth0 del 33ffe:3240:800:1005::2/64<br />说明：<br />ifconfig eth0 add 33ffe:3240:800:1005::2/64 为网卡eth0配置IPv6地址；<br />ifconfig eth0 add 33ffe:3240:800:1005::2/64 为网卡eth0删除IPv6地址；<br />练习的时候，ssh登陆linux服务器操作要小心，关闭了就不能开启了，除非你有多网卡。

实例：用ifconfig修改MAC地址<br />命令：ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE<br />[root@localhost ~]# ifconfig eth0 down //关闭网卡<br />[root@localhost ~]# ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE //修改MAC地址<br />[root@localhost ~]# ifconfig eth0 up //启动网卡<br />[root@localhost ~]# ifconfig<br />eth0      Link encap:Ethernet  HWaddr 00:AA:BB:CC:DD:EE  <br />          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0<br />          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1<br />          RX packets:8700857 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:31533 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:1000 <br />          RX bytes:596390239 (568.7 MiB)  TX bytes:2886956 (2.7 MiB)<br />lo        Link encap:Local Loopback  <br />          inet addr:127.0.0.1  Mask:255.0.0.0<br />          UP LOOPBACK RUNNING  MTU:16436  Metric:1<br />          RX packets:68 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:68 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:0 <br />          RX bytes:2856 (2.7 KiB)  TX bytes:2856 (2.7 KiB)<br />[root@localhost ~]# ifconfig eth0 hw ether 00:50:56:BF:26:20 //关闭网卡并修改MAC地址 <br />[root@localhost ~]# ifconfig eth0 up //启动网卡<br />[root@localhost ~]# ifconfig<br />eth0      Link encap:Ethernet  HWaddr 00:50:56:BF:26:20  <br />          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0<br />          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1<br />          RX packets:8700857 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:31533 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:1000 <br />          RX bytes:596390239 (568.7 MiB)  TX bytes:2886956 (2.7 MiB)<br />lo        Link encap:Local Loopback  <br />          inet addr:127.0.0.1  Mask:255.0.0.0<br />          UP LOOPBACK RUNNING  MTU:16436  Metric:1<br />          RX packets:68 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:68 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:0 <br />          RX bytes:2856 (2.7 KiB)  TX bytes:2856 (2.7 KiB) 

实例：配置IP地址<br />命令：<br />[root@localhost ~]# ifconfig eth0 192.168.120.56 <br />[root@localhost ~]# ifconfig eth0 192.168.120.56 netmask 255.255.255.0 <br />[root@localhost ~]# ifconfig eth0 192.168.120.56 netmask 255.255.255.0 broadcast 192.168.120.255<br />说明：<br />ifconfig eth0 192.168.120.56 <br />给eth0网卡配置IP地：192.168.120.56<br /> ifconfig eth0 192.168.120.56 netmask 255.255.255.0 <br />给eth0网卡配置IP地址：192.168.120.56 ，并加上子掩码：255.255.255.0<br />ifconfig eth0 192.168.120.56 netmask 255.255.255.0 broadcast 192.168.120.255<br />/给eth0网卡配置IP地址：192.168.120.56，加上子掩码：255.255.255.0，加上个广播地址： 192.168.120.255<br /><br /><br />实例：启动和关闭ARP协议<br />命令：<br />[root@localhost ~]# ifconfig eth0 arp <br />[root@localhost ~]# ifconfig eth0 -arp<br />说明：<br />ifconfig eth0 arp 开启网卡eth0 的arp协议；<br />ifconfig eth0 -arp 关闭网卡eth0 的arp协议；

实例：设置最大传输单元<br />命令：ifconfig eth0 mtu 1500<br />[root@localhost ~]# ifconfig eth0 mtu 1480<br />[root@localhost ~]# ifconfig<br />eth0      Link encap:Ethernet  HWaddr 00:50:56:BF:26:1F  <br />          inet addr:192.168.120.203  Bcast:192.168.120.255  Mask:255.255.255.0<br />          UP BROADCAST RUNNING MULTICAST  MTU:1480  Metric:1<br />          RX packets:8712395 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:36631 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:1000 <br />          RX bytes:597062089 (569.4 MiB)  TX bytes:2643973 (2.5 MiB)<br /><br />[root@localhost ~]# ifconfig eth0 mtu 1500[root@localhost ~]# ifconfigeth0      Link encap:Ethernet  HWaddr 00:50:56:BF:26:1F  <br />          inet addr:192.168.120.203  Bcast:192.168.120.255  Mask:255.255.255.0<br />          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1<br />          RX packets:8712548 errors:0 dropped:0 overruns:0 frame:0<br />          TX packets:36685 errors:0 dropped:0 overruns:0 carrier:0<br />          collisions:0 txqueuelen:1000 <br />          RX bytes:597072333 (569.4 MiB)  TX bytes:2650581 (2.5 MiB)<br />说明：设置能通过的最大数据包大小为1500bytes<br />备注：用ifconfig命令配置的网卡信息，在网卡重启后机器重启后，配置就不存在，要想将上述的配置信息永远的存在电脑里，那就要修改网卡的配置文件了。

---

# route命令
## 概述
Linux系统的toute命令用于显示和操作IP路由表（show / manipulate the IP routing table）。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。在 Linux 系统中，设置路由通常是为了解决以下问题：该 Linux 系统在一个局域网中，局域网中有一个网关，能够让机器访问 Internet，那么就需要将这台机器的 IP 地址设置为 Linux 机器的默认路由。要注意的是，直接在命令行下执行 route 命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在 / etc/rc.local 中添加 route 命令来保证该路由设置永久有效。
## 命令格式
route [-f] [-p] [Command [Destination] [mask Netmask] [Gateway] [metric Metric]] [if Interface]] 
## 命令功能
Route命令是用于操作基于内核ip路由表，它的主要作用是创建一个静态路由让指定一个主机或者一个网络通过一个网络连接口，如eth0。当使用参数时，路由表被修改，如果没有参数，则显示路由表当前内容
## 命令参数

```
-c 显示更多信息
-n 不解析名字
-v 显示详细的处理信息
-F 显示发送信息
-C 显示路由缓存
-f 清除所有网关入口的路由表。 
-p 与 add 命令一起使用时使路由具有永久性。
add: 添加一条新路由。
del: 删除一条路由。
-net: 目标地址是一个网络。
-host: 目标地址是一个主机。
netmask: 当添加一个网络路由时，需要使用网络掩码。
gw: 路由数据包通过网关。注意，你指定的网关必须能够达到。
metric：设置路由跳数。
Command 指定您想运行的命令 (Add/Change/Delete/Print)。 
Destination 指定该路由的网络目标。 
mask Netmask 指定与网络目标相关的网络掩码（也被称作子网掩码）。 
Gateway 指定网络目标定义的地址集和子网掩码可以到达的前进或下一跃点 IP 地址。 
metric Metric 为路由指定一个整数成本值标（从 1 至 9999），当在路由表 (与转发的数据包目标地址最匹配) 的多个路由中进行选择时可以使用。 
if Interface 为可以访问目标的接口指定接口索引。若要获得一个接口列表和它们相应的接口索引，使用 route print 命令的显示功能。可以使用十进制或十六进制值进行接口索引。
```
## 常用命令
实例：显示当前路由<br />命令：<br />route<br />route -n<br />[root@localhost ~]# route<br />Kernel IP routing table<br />Destination     Gateway         Genmask         Flags Metric Ref    Use Iface<br />192.168.120.0   *               255.255.255.0   U     0      0        0 eth0<br />e192.168.0.0     192.168.120.1   255.255.0.0     UG    0      0        0 eth0<br />10.0.0.0        192.168.120.1   255.0.0.0       UG    0      0        0 eth0<br />default         192.168.120.240 0.0.0.0         UG    0      0        0 eth0<br />[root@localhost ~]# route -n<br />Kernel IP routing table<br />Destination     Gateway         Genmask         Flags Metric Ref    Use Iface<br />192.168.120.0   0.0.0.0         255.255.255.0   U     0      0        0 eth0<br />192.168.0.0     192.168.120.1   255.255.0.0     UG    0      0        0 eth0<br />10.0.0.0        192.168.120.1   255.0.0.0       UG    0      0        0 eth0<br />0.0.0.0         192.168.120.240 0.0.0.0         UG    0      0        0 eth0<br />说明：<br />第一行表示主机所在网络的地址为192.168.120.0，若数据传送目标是在本局域网内通信，则可直接通过eth0转发数据包;<br />第四行表示数据传送目的是访问Internet，则由接口eth0，将数据包发送到网关192.168.120.240<br />其中Flags为路由标志，标记当前网络节点的状态。<br />Flags标志说明：

```
U Up表示此路由当前为启动状态
H Host，表示此网关为一主机
G Gateway，表示此网关为一路由器a
R Reinstate Route，使用动态路由重新初始化的路由
D Dynamically,此路由是动态性地写入a
M Modified，此路由是由路由守护程序或导向器动态修改
! 表示此路由当前为关闭状态
```

备注：route -n (-n 表示不解析名字,列出速度会比route 快)

实例：添加网关/设置网管<br />命令：route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0<br />说明：增加一条 到达 244.0.0.0 的路由

实例：删除路由记录<br />命令：<br />route del -net 224.0.0.0 netmask 240.0.0.0<br />route del -net 224.0.0.0 netmask 240.0.0.0 reject<br />说明：删除224.0.0.0的路由记录

实例 ：删除和添加设置默认网关<br />命令：<br />route del default gw 192.168.120.240<br />route add default gw 192.168.120.240
# ping命令
## 概述
Linux系统的ping命令是常用的网络命令，它通常用来测试与目标主机的连通性，我们经常会说"ping一下某机器，看是不是开着“、不能打开网页时会说"”你先ping网关地址192.168.1.1试试“。<br />它通过发送ICMP ECHO_REQUEST数据包到网络主机（send ICMP ECHO_REQUEST to network hosts），并显示响应情况，这样而我们就可以根据它输出的信息来确定目标主机是否可访问（但这不是绝对的）。有些服务器为了防止通过ping探测到，通过防火墙设置了禁止ping或者在内核参数中禁止ping，这样就不能通过ping确定该主机是否还处于开启状态。<br />linux下的ping和windows下的ping稍有区别,linux下ping不会自动终止,需要按ctrl+c终止或者用参数-c指定要求完成的回应次数。
## 命令格式
ping [参数] [主机名或IP地址]
## 命令功能
ping命令用于：确定网络和各外部主机的状态；跟踪和隔离硬件和软件问题；测试、评估和管理网络。如果主机正在运行并连在网上，它就对回送信号进行响应。每个回送信号请求包含一个网际协议（IP）和 ICMP 头，后面紧跟一个 tim 结构，以及来填写这个信息包的足够的字节。缺省情况是连续发送回送信号请求直到接收到中断信号（Ctrl-C）。<br />ping 命令每秒发送一个数据报并且为每个接收到的响应打印一行输出。ping 命令计算信号往返时间和(信息)包丢失情况的统计信息，并且在完成之后显示一个简要总结。ping 命令在**程序超时或当接收到 SIGINT 信号时结束**。Host 参数或者是一个有效的主机名或者是因特网地址。
## 命令参数

```
-d 使用Socket的SO_DEBUG功能。
-f  极限检测。大量且快速地送网络封包给一台机器，看它的回应。
-n 只输出数值。
-q 不显示任何传送封包的信息，只显示最后的结果。
-r 忽略普通的Routing Table，直接将数据包送到远端主机上。通常是查看本机的网络接口是否有问题。
-R 记录路由过程。
-v 详细显示指令的执行过程。
<p>-c 数目：在发送指定数目的包后停止。
-i 秒数：设定间隔几秒送一个网络封包给一台机器，预设值是一秒送一次。
-I 网络界面：使用指定的网络界面送出数据包。
-l 前置载入：设置在送出要求信息之前，先行发出的数据包。
-p 范本样式：设置填满数据包的范本样式。
-s 字节数：指定发送的数据字节数，预设值是56，加上8字节的ICMP头，一共是64ICMP数据字节。
-t 存活数值：设置存活数值TTL的大小。
```
## 常用命令
实例：ping的通的情况<br />命令：ping 192.168.120.205<br />输出：<br />[root@localhost ~]# ping 192.168.120.205<br />PING 192.168.120.205 (192.168.120.205) 56(84) bytes of data.<br />64 bytes from 192.168.120.205: icmp_seq=1 ttl=64 time=0.720 ms<br />64 bytes from 192.168.120.205: icmp_seq=2 ttl=64 time=0.181 ms<br />64 bytes from 192.168.120.205: icmp_seq=3 ttl=64 time=0.191 ms<br />64 bytes from 192.168.120.205: icmp_seq=4 ttl=64 time=0.188 ms<br />64 bytes from 192.168.120.205: icmp_seq=5 ttl=64 time=0.189 ms<br /><br />--- 192.168.120.205 ping statistics ---<br />5 packets transmitted, 5 received, 0% packet loss, time 4000ms<br />rtt min/avg/max/mdev = 0.181/0.293/0.720/0.214 ms<br />[root@localhost ~]# <br /><br /><br />实例：ping不通的情况<br />命令：ping 192.168.120.202<br />输出：<br />[root@localhost ~]# ping 192.168.120.202<br />PING 192.168.120.202 (192.168.120.202) 56(84) bytes of data.<br />From 192.168.120.204 icmp_seq=1 Destination Host Unreachable<br />From 192.168.120.204 icmp_seq=2 Destination Host Unreachable<br /><br /><br />实例：ping指定次数<br />命令：ping -c 10 192.168.120.206

实例：时间间隔和次数限制的ping<br />命令：ping -c 10 -i 0.5 192.168.120.206

实例：多参数使用<br />命令：ping -i 3 -s 1024 -t 255 192.168.120.206<br />说明：-i 3 发送周期为 3秒 -s 设置发送包的大小为1024 -t 设置TTL值为 255
# traceroute命令
## 概述
通过traceroute我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。linux系统中，我们称之为traceroute,在MS Windows中为tracert。 traceroute通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备traceroute要测3次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其IP地址。<br />在大多数情况下，我们会在linux主机系统下，直接执行命令行：<br />traceroute hostname<br />而在Windows系统下是执行tracert的命令：<br />tracert hostname
## 命令格式
traceroute[参数][主机]
## 命令功能
traceroute命令让你追踪网络数据包的路由途径，预设数据包大小是40Bytes，用户可另行设置。具体参数格式：traceroute [-dFlnrvx][-f<存活数值>][-g<网关>...][-i<网络界面>][-m<存活数值>][-p<通信端口>][-s<来源地址>][-t<服务类型>][-w<超时秒数>][主机名称或IP地址][数据包大小]
## 命令参数

```
-d 使用Socket层级的排错功能。
-f 设置第一个检测数据包的存活数值TTL的大小。
-F 设置勿离断位。
-g 设置来源路由网关，最多可设置8个。
-i 使用指定的网络界面送出数据包。
-I 使用ICMP回应取代UDP资料信息。
-m 设置检测数据包的最大存活数值TTL的大小。
-n 直接使用IP地址而非主机名称。
-p 设置UDP传输协议的通信端口。
-r 忽略普通的Routing Table，直接将数据包送到远端主机上。
-s 设置本地主机送出数据包的IP地址。
-t 设置检测数据包的TOS数值。
-v 详细显示指令的执行过程。
-w 设置等待远端主机回报的时间。
-x 开启或关闭数据包的正确性检验。
```
## 常用命令
实例1：traceroute 用法简单、最常用的用法<br />命令：<br />traceroute www.baidu.com<br />输出：<br />[root@localhost ~]# traceroute www.baidu.com<br />traceroute to www.baidu.com (61.135.169.125), 30 hops max, 40 byte packets<br /> 1  192.168.74.2 (192.168.74.2)  2.606 ms  2.771 ms  2.950 ms<br /> 2  211.151.56.57 (211.151.56.57)  0.596 ms  0.598 ms  0.591 ms<br /> 3  211.151.227.206 (211.151.227.206)  0.546 ms  0.544 ms  0.538 ms<br /> 4  210.77.139.145 (210.77.139.145)  0.710 ms  0.748 ms  0.801 ms<br /> 5  202.106.42.101 (202.106.42.101)  6.759 ms  6.945 ms  7.107 ms<br /> 6  61.148.154.97 (61.148.154.97)  718.908 ms * bt-228-025.bta.net.cn (202.106.228.25)  5.177 ms<br /> 7  124.65.58.213 (124.65.58.213)  4.343 ms  4.336 ms  4.367 ms<br /> 8  202.106.35.190 (202.106.35.190)  1.795 ms 61.148.156.138 (61.148.156.138)  1.899 ms  1.951 ms<br /> 9  * * *<br />30  * * *<br />[root@localhost ~]# <br />说明：<br />记录按序列号从1开始，每个纪录就是一跳 ，每跳表示一个网关，我们看到每行有三个时间，单位是 ms，其实就是-q的默认参数。探测数据包向每个网关发送三个数据包后，网关响应后返回的时间；如果您用 traceroute -q 4 www.58.com ，表示向每个网关发送4个数据包。<br />有时我们traceroute 一台主机时，会看到有一些行是以星号表示的。出现这样的情况，可能是防火墙封掉了ICMP的返回信息，所以我们得不到什么相关的数据包返回数据。<br />有时我们在某一网关处延时比较长，有可能是某台网关比较阻塞，也可能是物理设备本身的原因。当然如果某台DNS出现问题时，不能解析主机名、域名时，也会 有延时长的现象；您可以加-n 参数来避免DNS解析，以IP格式输出数据。<br />如果在局域网中的不同网段之间，我们可以通过traceroute 来排查问题所在，是主机的问题还是网关的问题。如果我们通过远程来访问某台服务器遇到问题时，我们用到traceroute 追踪数据包所经过的网关，提交IDC服务商，也有助于解决问题；但目前看来在国内解决这样的问题是比较困难的，就是我们发现问题所在，IDC服务商也不可能帮助我们解决。
## Traceroute的工作原理
Traceroute最简单的基本用法是：traceroute hostname<br />Traceroute程序的设计是利用ICMP及IP header的TTL（Time To Live）栏位（field）。首先，traceroute送出一个TTL是1的IP datagram（其实，每次送出的为3个40字节的包，包括源地址，目的地址和包发出的时间标签）到目的地，当路径上的第一个路由器（router）收到这个datagram时，它将TTL减1。此时，TTL变为0了，所以该路由器会将此datagram丢掉，并送回一个「ICMP time exceeded」消息（包括发IP包的源地址，IP包的所有内容及路由器的IP地址），traceroute 收到这个消息后，便知道这个路由器存在于这个路径上，接着traceroute 再送出另一个TTL是2 的datagram，发现第2 个路由器...... traceroute 每次将送出的datagram的TTL 加1来发现另一个路由器，这个重复的动作一直持续到某个datagram 抵达目的地。当datagram到达目的地后，该主机并不会送回ICMP time exceeded消息，因为它已是目的地了，那么traceroute如何得知目的地到达了呢？<br />Traceroute在送出UDP datagrams到目的地时，它所选择送达的port number 是一个一般应用程序都不会用的号码（30000 以上），所以当此UDP datagram 到达目的地后该主机会送回一个「ICMP port unreachable」的消息，而当traceroute 收到这个消息时，便知道目的地已经到达了。所以traceroute 在Server端也是没有所谓的Daemon 程式。<br />Traceroute提取发 ICMP TTL到期消息设备的IP地址并作域名解析。每次 ，Traceroute都打印出一系列数据,包括所经过的路由设备的域名及 IP地址,三个包每次来回所花时间。
# scp命令
## 概述
scp命令是secure copy的简写，用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp知识在本机进行拷贝不能跨服务器，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读read only system时，用scp可以帮你把文件移出来。另外scp还非常不占资源，不会提高多少系统负荷，在这一点上rsync就远远不及它了。虽然rsync比scp会快一点，但当小文件众多的情况下，rsync会导致硬盘I/O非常高，而scp基本不影响系统正常使用。
## 命令格式
scp [参数] [原路径] [目标路径]
## 命令功能
scp是secure copy的缩写，scp是Linux系统基于ssh登陆进行安全的远程文件拷贝命令。linux的scp命令可以在Linux服务器之间复制文件和目录。
## 命令参数

```
-1  强制scp命令使用协议ssh1  
-2  强制scp命令使用协议ssh2  
-4  强制scp命令只使用IPv4寻址  
-6  强制scp命令只使用IPv6寻址  
-B  使用批处理模式（传输过程中不询问传输口令或短语）  
-C  允许压缩。（将-C标志传递给ssh，从而打开压缩功能）  
-p 保留原文件的修改时间，访问时间和访问权限。  
-q  不显示传输进度条。  
-r  递归复制整个目录。  
-v 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。   
-c cipher  以cipher将数据传输进行加密，这个选项将直接传递给ssh。   
-F ssh_config  指定一个替代的ssh配置文件，此参数直接传递给ssh。  
-i identity_file  从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。    
-l limit  限定用户所能使用的带宽，以Kbit/s为单位。     
-o ssh_option  如果习惯于使用ssh_config(5)中的参数传递方式，   
-P port  注意是大写的P, port是指定数据传输用到的端口号   
-S program  指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。
```

## 常用命令
实例：从远处复制到本地/从本地复制到远处<br />命令：<br />scp -r root@192.168.120.204:/opt/soft/mongodb /opt/soft/<br />scp -r /opt/soft/mongodb root@192.168.120.204:/opt/soft/scptest<br />说明：从192.168.120.204机器上的/opt/soft/中下载mongodb 目录到本地的/opt/soft/目录来。

