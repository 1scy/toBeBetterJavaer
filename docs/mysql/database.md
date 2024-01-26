---
title: MySQL数据库的基本操作
shortTitle: MySQL数据库的基本操作
---

# MySQL数据库的基本操作

[MySQL 安装完成并连接](https://javabetter.cn/mysql/install.html)成功后，就可以创建数据库进行操作了。

执行 `show databases;` 命令可以查看当前数据库的所有数据库。

![](https://cdn.tobebetterjavaer.com/stutymore/database-20240125185015.png)

注意要带上分号 `;` 并按下 enter 键，不然 MySQL 会认为你还没有输入完，会换一行继续等待你输入。

![](https://cdn.tobebetterjavaer.com/stutymore/database-20240125185214.png)

分号 `;` 是 MySQL 的语句结束符。

OK，像上面截图中的 information_schema、mysql、performance_schema、sys 这些都是 MySQL 自带的数据库，剩余的 cmower、codingmore、jeesite、jepf、pai_coding 等都是我本地创建的数据库。

[二哥的 MySQL 进阶之路](https://javabetter.cn/mysql/)会结合[技术派实战项目](https://paicoding.com)来讲解 MySQL 的基本操作。其中的 pai_coding 就是技术派项目的数据库。

对技术派项目还不太了解的小伙伴可以戳下面的链接了解：

[二哥的原创实战项目技术派详细介绍](https://javabetter.cn/zhishixingqiu/paicoding.html)

## 创建数据库

创建数据库的语法是：

```sql
create database 数据库名;
```

比如说我要创建一个名为 `test` 的数据库，就可以执行：

```sql
create database test;
```

如果提示 `Query OK, 1 row affected (0.02 sec)`，说明数据库创建成功了。

再用 `show databases;` 命令查看一下，就可以看到 `test` 数据库了。

>一个小技巧：MySQL 会记忆之前输入过的命令，使用键盘上的上下箭头按键可以切换命令。

![](https://cdn.tobebetterjavaer.com/stutymore/database-20240125190817.png)

通常情况下，我们在创建数据库的时候会额外加上 `if not exists`，否则当数据库已经存在的时候，会报 `database exists` 的错误。

```sql
create database test;
ERROR 1007 (HY000): Can't create database 'test'; database exists
```

我们可以这样写：

```sql
create database if not exists test;
Query OK, 1 row affected, 1 warning (0.00 sec)
```

可以看到，SQL 语句执行成功了，但会有一个 warning 警告，这是因为数据库已经存在了，所以 MySQL 会提示我们。

## 切换数据库

切换数据库的语法是：

```sql
use 数据库名;
```

比如说我们要切换到技术派的 `pai_coding` 数据库，就可以执行：

```sql
use pai_coding;
```

如果提示 `Database changed`，说明切换成功了。

![](https://cdn.tobebetterjavaer.com/stutymore/database-20240126160536.png)

只有切换到技术派数据库下，我们才能对技术派数据库下面的表进行操作。

![](https://cdn.tobebetterjavaer.com/stutymore/database-20240126161020.png)

## 删除数据库

删除数据库的语法是：

```sql
drop database 数据库名;
```

比如说我们要删除 `test` 数据库，就可以执行：

```sql
drop database test;
```

是不是很简单？

但删库跑路之前，最好掐一下自己的大腿，看看自己是不是清醒着，不然后悔都来不及（😂）。


----

GitHub 上标星 10000+ 的开源知识库《[二哥的 Java 进阶之路](https://github.com/itwanger/toBeBetterJavaer)》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：[太赞了，GitHub 上标星 10000+ 的 Java 教程](https://javabetter.cn/overview/)


微信搜 **沉默王二** 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 **222** 即可免费领取。

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png)