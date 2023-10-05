---
title: 群聊初步学习实现过程
copyright: true
abbrlink: 10141
date: 2018-10-05 16:48:15
tags: Java
categories: Java
keywords:
description:
---


** 看学习视频所得 **

<!-- more -->

Chat0.1:
客户端：先写一个简易的窗口，采用extends Frame

Chat0.2:
客户端：给窗口添加TextArea在BorderLayout北面，添加TextField在BorderLayout南面，注意pack()、add();

Chat0.3:
客户端：匿名类改写windowClosing()使其System.exit(0)（可以关闭）

Chat0.4:
客户端：使用内部类给框架添加监听事件，改写actionPerformed(ActionEvent e)使Field内容显示到Area中，清空Field

Chat0.5:
客户端：不变
服务器端：建立ServerSocket serverSocket = new ServerSocket(8088);当有连接时Socket s = serverSocket.accept();

Chat0.6:
客户端：设置connect函数建立 socket = new Socket("127.0.0.1", 8088);连接，connect()置于launchFrame()框架建立同时连接上端口号
服务器端：不变

Chat0.7:
客户端：利用DataOutputStream dos = new DataOutputStream(s.getOutputStream()); dos.writeUTF(str);将输入内容写入流中，内容储存在流中方便通信。
服务器端：利用 DataInputStream dis = new DataInputStream(s.getInputStream()); Stringstr; dis.readUTF(); System.out.println(str);将内容接收过来并在控制台打印出来

Chat0.8:
客户端：将DataOutputStream设为全局变量,设置disconnect函数,当关闭窗口时应断开连接
服务器端：不变

Chat0.9:
客户端：不变
服务器端：增加容错性，添加BindException、EOFException、以及finally判断来关闭Socket和DataInputStream，出现
EOFException表示前面有客户端占用端口，所以应当写出提示语句最后在finally中关闭之前的占用

Chat1.0:
客户端：不变
服务器端：使用内部类增加多线程Client，重写run()、创建函数start(),main()函数中只有一句话，在start()中创建端口使其监听好，设置started为true，并设置BindException，再接收端口，调用Client类构造函数接受到流中的内容并bConnected = true;最后生成新的线程（在run()中进行）来读取流中的内容并打印出来，初步实现多客户端的功能

Chat1.1:
客户端：不变
服务器端：将客户端的信息通过服务端存储并发给每个客户端,但客户端没有接收

Chat1.2:
客户端：利用多线程来接收发过来的字符串,后面再打印在TextArea上
服务器端：不变

Chat1.3:
客户端：不变
服务器端：修正关闭一个客户端报错的问题,应当将去除的客户端从集合中删去,这时候移除的客户端应当是要发送的那个线程的客户端,此时客户端也就不会接收到信息,而不是当前客户端,删去的客户端应当要注意区分

> 学习的代码-->[源文件](https://github.com/Thunderforrain/For-Java/tree/master/chat)
日后有机会将逐步完善