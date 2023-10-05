---
title: 落后的vim简易设计
copyright: true
abbrlink: ae257b96
date: 2018-09-07 03:36:50
tags: Java
categories: Java
---
<blockquote class="blockquote-center">**还是要发点博客**</blockquote>


<!-- more -->
## 暑假关于Java的学习
主要是实现vim的简易功能，很简陋，以后有时间再更改

> 最终目标
用Java实现简单的Vim编辑器功能
为什么是Vim?
Vim以其强大的功能在程序员中间被尊为编辑器之神。它设计为完全用键盘操纵电脑,减少了双手频繁地在鼠
标和键盘间切换的时间,在你熟练掌握它之后,你的编辑效率将会成倍增加
Vim是一款高度可定制的软件,它充分体现了自由的程序思想,你可以根据个人喜好,自由地改变Vim的行
为,也可以使用别人的配置将Vim打造成强大的集成开发环境
Vim几乎是处处可用的,在其它主流的编辑器中你也可以使用Vim的编辑模式,甚至于浏览器中都有Vim插
件,你可以用Vim浏览网页
在你远程登陆服务器修改代码时Vim几乎是唯一的选择(远程登陆服务器没有图形界面,无法使用鼠标)
具体安排
1.第一周:(基本字符串操作)
按i进入编辑模式(文本可编辑),按esc进入普通模式(文本不可编辑,所有按键都是快捷键)
普通模式中按h,j,k,l光标左,下,上,右移动(其中上下移动为难点)
2.第二周:(IO流,文件操作)
按w保存文件,但不退出
按x保存并退出,未保存退出要有提示,提示显示在下方状态栏
按dd删除一行
按yy复制一行到粘贴板
按p将粘贴板内容粘贴在下一行
3.第三周:(多线程,网络操作,字符串高级操作)定时备份文件
(尽力做) 远程编辑文件(这台电脑编辑另外一台电脑上的文件)
按/匹配字符串(如/foo,匹配文本中的foo字符串)
按/foo/foo1,用foo1替换所有foo字符串
4.第四周:(高级功能,代码重构、完善、总结)
(选做)宏录制:qa,开始记录键盘操作,并录入a寄存器中。再按q完成录制。再按@a,重复a中记录的动
作
没完成的功能继续完善
减少重复代码,使用面向对象的设计方法


```bash
import javax.swing.*;
import javax.swing.text.BadLocationException;
import javax.swing.text.DefaultHighlighter;
import javax.swing.text.Highlighter;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;


class UpdateFile implements Runnable{
        public void run() {
            while(true){
                try{
                    String fname = "Write1.txt";
                    String childdir = "backup";
                    File f1,f2,child;
                    f1 = new File(fname);
                    child = new File(childdir);
                    if(f1.exists()) {
                        if(!child.exists()){
                            child.mkdir();
                        }
                        f2 = new File(child, fname);
                        if(!f2.exists()||f2.exists()&&(f1.lastModified() > f2.lastModified())) {
                            copy(f1, f2);
                        }
                        getinfo(f1);
                        getinfo(child);
                    }
                    else{
                        System.out.println(f1.getName() + " file not found!");
                    }
                }catch (IOException e){
                    System.out.println("error");
                }
                try{
                    Thread.sleep(60000);
                }catch(Exception e){}
            }
        }
    public void copy(File f1, File f2) throws IOException{
        FileInputStream rf = new FileInputStream(f1);
        FileOutputStream wf = new FileOutputStream(f2);
        int count,n = 512;
        byte buffer[] = new byte[n];
        count = rf.read(buffer,0,n);
        while (count != -1) {
            wf.write(buffer,0,count);
            count = rf.read(buffer,0,n);
        }
        System.out.println("CopyFile " + f2.getName() + "!");
        rf.close();
        wf.close();
    }
    public static void getinfo(File f1) throws IOException{
        SimpleDateFormat sdf;
        sdf = new SimpleDateFormat("yyyy年 MM 月 dd 日 hh 时 mm 分");
        if(f1.isFile()) {
            System.out.println("<File>\t" + f1.getAbsolutePath() + "\t" + f1.length() + "\t" +
                    sdf.format(new Date()));
        }
        else{
            System.out.println("<Dir>\t" + f1.getAbsolutePath());
            File[] files = f1.listFiles();
            for(int i = 0;i<files.length; i++) {
                getinfo(files[i]);
            }
        }
    }
}

class Read{
    String key="i 键被按下";
    String word=" ";
    int d=0;
    int y=0;
    String psg = " ";
    Read(JTextArea ja) {
        ja.addKeyListener(new KeyListener() {
            public void keyPressed(KeyEvent e) {}
            public void keyTyped(KeyEvent e){
                int location = ja.getCaretPosition();
                switch (e.getKeyChar()) {
                    case 'h': {
                        if (!key.equals("i 键被按下")) {
                            System.out.println(" h 键被按下");
                            if (location==0) {}
                            else ja.setCaretPosition(location - 1);
                        }
                        break;
                    }
                    case 'l': {
                        if (!key.equals("i 键被按下")) {
                            System.out.println(" l键被按下");
                            mouse(ja, location, 'l',psg);
                        }
                        break;
                    }
                    case 'j': {
                        if (!key.equals("i 键被按下")) {
                            System.out.println(" j键被按下");
                            mouse(ja, location, 'j',psg);
                        }
                        break;
                    }
                    case 'k': {
                        if (!key.equals("i 键被按下")) {
                            System.out.println(" k键被按下");
                            mouse(ja, location, 'k',psg);
                        }
                        break;
                    }
                    case 'i': {
                        System.out.println("i 键被按下");
                        key = "i 键被按下";
                        ja.setEditable(true);
                        break;
                    }
                    case 'w': {
                        if (!key.equals("i 键被按下")) {
                            System.out.print("保存文件\n");
                            WriteInto(ja.getText());
                            word = "保存文件";
                        }
                        break;
                    }
                    case 'x': {
                        if (!key.equals("i 键被按下")) {
                            System.out.print("保存文件并退出\n");
                            WriteInto(ja.getText());
                            System.exit(0);
                        }
                        break;
                    }
                    case KeyEvent.VK_ESCAPE: {
                        System.out.print("Esc键被按下\n");
                        key = "Esc键被按下";
                        ja.setEditable(false);
                        break;
                    }
                    case'd':{
                        d++;
                        if (!key.equals("i 键被按下")&&d==2) {
                            System.out.println(" d键被按下");
                            mouse(ja, location, 'd',psg);
                            d=0;
                        }
                        break;
                    }
                    case'y':{
                        y++;
                        if (!key.equals("i 键被按下")&&y==2) {
                            System.out.println(" y键被按下");
                            psg = mouse(ja, location, 'y',psg);
                            y=0;
                        }
                        break;
                    }
                    case'p':{
                        if (!key.equals("i 键被按下")) {
                            System.out.println(" p键被按下");
                            psg = mouse(ja, location, 'p',psg);
                        }
                        break;
                    }
                    case'/':{
                        Scanner s = new Scanner(System.in);
                        String str = null;
                        System.out.println("请输入您想输入的字符串：");
                        str = s.nextLine();
                        HighLighter(ja,str);
                    }
                    default: break;
                }
            }
            public void keyReleased(KeyEvent e) {}
        });
    }

    public String mouse(JTextArea jas,int pos,char letter,String text){
        int lineOfC,aline,col;
        try {
            //获取行数
            lineOfC = jas.getLineOfOffset(pos);
//            上面的字符总数
            aline = jas.getLineStartOffset(lineOfC);
            //获取列数
            col = pos - aline + 1;
//            System.out.println("当前光标位置" + lineOfC + "行 , " + col + " 列 ");
            switch (letter){
                case'l':{
                    if(pos==jas.getLineEndOffset(jas.getLineCount()-1)) {}
                    else jas.setCaretPosition(pos+1);
                    break;
                }
                case'j':{
                    if(lineOfC == jas.getLineCount()-1){}
                    else{
                        int chance1 = jas.getLineEndOffset(lineOfC)-aline;
                        int chance2 = jas.getLineEndOffset(lineOfC+1)-jas.getLineStartOffset(lineOfC+1);
                        if(chance2 > col) {
                            jas.setCaretPosition(pos+chance1);
                        }
                        else{
                            jas.setCaretPosition(pos+chance2);
                        }
                    }
                    break;
                }
                case'k':{
                    if(lineOfC == 0){}
                    else{
                        int chance = jas.getLineEndOffset(lineOfC-1)-jas.getLineStartOffset(lineOfC-1);
                        if(chance>col){
                            jas.setCaretPosition(pos-chance);
                        }
                        else{
                            jas.setCaretPosition(pos-col);
                        }
                    }
                    break;
                }
                case'y':{
                    int chance = jas.getLineEndOffset(lineOfC)-aline;
                    text=jas.getText(jas.getLineStartOffset(lineOfC),chance-1);
                    return text;
                }
                case'd':{
                    jas.replaceRange("",aline,jas.getLineEndOffset(lineOfC));
                    break;
                }
                case'p':{
                    String tex=text+'\n';
                    jas.insert(tex,jas.getLineEndOffset(lineOfC));
                    return text;
                }
                default:
            }
        }
        catch(Exception ex) {
            System.out.println( "无法获得当前光标位置 ");
        }
        return text;
    }
    public void WriteInto(String line){
        try{

            FileOutputStream fw = new FileOutputStream("Write1.txt");//向指定文本内写入
            fw.write(line.getBytes());
            fw.close();
            System.out.println();
        }catch(Exception e){System.out.println("error");}
    }
    public String getKey() { return key;}
    public String getWord(){ return word;}
    public void HighLighter(JTextArea ta, String keyWord){
        int key=0,i;
        String s="",s1="";
        for(i=0;i<keyWord.length();i++) {
            if(keyWord.charAt(i)=='/') {
                    key=1;
                break;
            }
            s1+=keyWord.charAt(i);
        }
        Highlighter highLighter = ta.getHighlighter();
        String text = ta.getText();
        DefaultHighlighter.DefaultHighlightPainter p = new DefaultHighlighter.DefaultHighlightPainter(Color.RED);
        int pos = 0;
        if(key==0){
            while ((pos = text.indexOf(keyWord, pos)) >= 0)
            {
                try
                {
                    highLighter.addHighlight(pos, pos + keyWord.length(), p);
                    pos += keyWord.length();
                } catch (BadLocationException e)
                {
                    e.printStackTrace();
                }
            }
        }
        else{
            for(int j=i+1;j<keyWord.length();j++) {
                s += keyWord.charAt(j);
            }
            while ((pos = text.indexOf(s1, pos)) >= 0)
            {
                ta.replaceRange(s,pos,pos + s1.length());
                pos += keyWord.length();
            }
        }
    }
}

public class  Vim implements WindowListener {
    JTextField tB;
    JTextArea tA;
    Read a ;
    JFrame jf;
    public static void main(String[] args) {
        Vim test = new Vim();
    }
    public Vim() {
        String s = "hfciuwfoouierhf\nchbaohdfooequfh\ndsiuyfoogaerwiuyfooghui\nweichgengcheng\nfoohguewoiuryefoohalfhdfoohel\njhfiufooasergfure";
        jf = new JFrame("Vim");
        // 创建一个文本区域和一个文本框
        tA = new JTextArea(s, 8, 8);
        tB = new JTextField(5);
        // 设置自动换行
        tA.setLineWrap(true);
        // 添加到内容面板
        JScrollPane scrollPane = new JScrollPane(tA);
        jf.add(scrollPane, BorderLayout.CENTER);
        jf.add(tB,BorderLayout.SOUTH);
        jf.setLocation(new Point(200, 200));
        tA.setEditable(true);
        tB.setEditable(false);
        jf.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
        jf.addWindowListener(this);// 向文本对象添加窗口事件监听
        jf.setVisible(true);
        jf.setSize(400, 400);
        a = new Read(tA);
        UpdateFile updateFile = new UpdateFile();
        Thread a = new Thread(updateFile);
        a.start();
    }
    @Override
    public void windowActivated(WindowEvent e) {}

    @Override
    public void windowClosed(WindowEvent e) {}

    @Override
    public void windowClosing(WindowEvent e) {
        if(a.getKey().equals("Esc键被按下")&&a.getWord().equals("保存文件")){
            System.exit(0);// 系统退出
        }
        else {
            tB.setText(": 未保存");
        }
    }
    @Override
    public void windowDeactivated(WindowEvent e) {}

    @Override
    public void windowDeiconified(WindowEvent e) {}

    @Override
    public void windowIconified(WindowEvent e) {}

    @Override
    public void windowOpened(WindowEvent e) {
        tB.setText(": 窗口被激活");
    }
}
```
