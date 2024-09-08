import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,e as t}from"./app-CoUEeJS-.js";const r={},l=t('<h2 id="_1-linux-常用命令" tabindex="-1"><a class="header-anchor" href="#_1-linux-常用命令"><span>1. Linux 常用命令</span></a></h2><p>推荐阅读：<a href="https://javabetter.cn/pdf/linux.html" target="_blank" rel="noopener noreferrer">常用高频 Linux 速查备忘手册</a></p><p>我自己常用的 Linux 命令有 top 查看系统资源、ps 查看进程、netstat 查看网络连接、ping 测试网络连通性、find 查找文件、chmod 修改文件权限、kill 终止进程、df 查看磁盘空间、free 查看内存使用、service 启动服务、mkdir 创建目录、rm 删除文件、rmdir 删除目录、cp 复制文件、mv 移动文件、zip 压缩文件、unzip 解压文件等等这些。</p><blockquote><p>下面这些列表供大家作为参考，可以根据自己的实际情况进行选择。</p></blockquote><h3 id="文件操作的命令有哪些" tabindex="-1"><a class="header-anchor" href="#文件操作的命令有哪些"><span>文件操作的命令有哪些？</span></a></h3><ul><li><code>ls</code>：列出目录内容。<code>ls -l</code>显示详细信息，<code>ls -a</code>显示隐藏文件。</li><li><code>cd</code>：更改当前目录。<code>cd ..</code>回到上级目录，<code>cd ~</code>回到用户的主目录。</li><li><code>pwd</code>：显示当前工作目录的完整路径。</li><li><code>cp</code>：复制文件或目录。<code>cp source_file target_file</code>复制文件，<code>cp -r source_directory target_directory</code>复制目录。</li><li><code>mv</code>：移动或重命名文件或目录。</li><li><code>rm</code>：删除文件或目录。<code>rm -r</code>递归删除目录及其内容。</li><li><code>mkdir</code>：创建新目录。</li><li><code>cat</code>：查看文件内容。<code>cat file1 file2</code>合并文件内容显示。</li></ul><h3 id="系统管理的命令有哪些" tabindex="-1"><a class="header-anchor" href="#系统管理的命令有哪些"><span>系统管理的命令有哪些？</span></a></h3><ul><li><code>ps</code>：显示当前运行的进程。<code>ps aux</code>显示所有进程。</li><li><code>top</code>：实时显示进程动态。</li><li><code>kill</code>：终止进程。<code>kill -9 PID</code>强制终止。</li><li><code>df</code>：显示磁盘空间使用情况。<code>df -h</code>以易读格式显示。</li><li><code>du</code>：显示目录或文件的磁盘使用情况。</li><li><code>free</code>：显示内存和交换空间的使用情况。</li><li><code>chmod</code>：更改文件或目录的权限。</li><li><code>chown</code>：更改文件或目录的所有者和所属组。</li></ul><h4 id="chmod-的参数讲一下" tabindex="-1"><a class="header-anchor" href="#chmod-的参数讲一下"><span>chmod 的参数讲一下？</span></a></h4><p>chmod 命令在 Linux 中用来改变文件或目录的访问权限。这个命令的使用可以基于符号表示法（也称为文本方法）或者八进制数表示法。</p><p>像 <code>chmod 777 file</code> 赋予文件所有权限，就属于八进制数表示法。<code>7=4+2+1</code>，分别代表读、写、执行权限。</p><p>Linux 中的权限可以应用于三种类别的用户：</p><ul><li>文件所有者（u）</li><li>与文件所有者同组的用户（g）</li><li>其他用户（o）</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png" alt="图片来源于网络" tabindex="0" loading="lazy"><figcaption>图片来源于网络</figcaption></figure><p>①、符号模式</p><p>符号模式使用字母来表示权限，如下：</p><ul><li>读（r）</li><li>写（w）</li><li>执行（x）</li><li>所有（a）</li></ul><p>例如：</p><ul><li><code>chmod u+w file</code>：给文件所有者添加写权限。</li><li><code>chmod g-r file</code>：移除组用户的读权限。</li><li><code>chmod o+x file</code>：给其他用户添加执行权限。</li><li><code>chmod u=rwx,g=rx,o=r file</code>：设置文件所有者具有读写执行权限，组用户具有读执行权限，其他用户具有读权限。</li></ul><p>②、数字模式</p><p>数字模式使用三位八进制数来表示权限，每位数字代表不同的用户类别（所有者、组、其他用户），数字是其各自权限值的总和：</p><ul><li>读（r）= 4</li><li>写（w）= 2</li><li>执行（x）= 1</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205700.png" alt="图片来源于网络" tabindex="0" loading="lazy"><figcaption>图片来源于网络</figcaption></figure><p>因此，权限模式可以是从 0（无权限）到 7（读写执行权限）的任何值。</p><ul><li>chmod 755 file：使得文件所有者有读写执行（7）权限，组用户和其他用户有读和执行（5）权限。</li><li>chmod 644 file：使得文件所有者有读写（6）权限，而组用户和其他用户只有读（4）权限。</li></ul><h3 id="网络管理的命令有哪些" tabindex="-1"><a class="header-anchor" href="#网络管理的命令有哪些"><span>网络管理的命令有哪些？</span></a></h3><ul><li><code>ping</code>：检查与远程服务器的连接。</li><li><code>wget</code>：从网络上下载文件。</li><li><code>ifconfig</code>：显示网络接口的配置信息。</li><li><code>netstat</code>：显示网络连接、路由表和网络接口信息。</li></ul><h3 id="压缩和解压的命令有哪些" tabindex="-1"><a class="header-anchor" href="#压缩和解压的命令有哪些"><span>压缩和解压的命令有哪些？</span></a></h3><ul><li><code>tar</code>：打包或解包<code>.tar</code>文件。<code>tar cvf archive.tar files</code>打包，<code>tar xvf archive.tar</code>解包。</li><li><code>gzip</code> / <code>gunzip</code>：压缩或解压<code>.gz</code>文件。</li><li><code>zip</code> / <code>unzip</code>：压缩或解压<code>.zip</code>文件。</li></ul><h3 id="查找文件的命令有哪些" tabindex="-1"><a class="header-anchor" href="#查找文件的命令有哪些"><span>查找文件的命令有哪些？</span></a></h3><ul><li><code>find</code>：在目录树中查找文件。<code>find /directory/ -name filename</code>。</li></ul><h4 id="liunx-下查找一个文件怎么做" tabindex="-1"><a class="header-anchor" href="#liunx-下查找一个文件怎么做"><span>Liunx 下查找一个文件怎么做？</span></a></h4><p>在 Linux 环境下查找文件，有多种命令和方法可以使用。find 命令是最常用的文件查找工具之一，它可以在指定目录下递归查找符合条件的文件和目录。</p><p>例如：在当前目录及其子目录中查找名为 &quot;example.txt&quot; 的文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;example.txt&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：查找 <code>/home</code> 目录中所有 <code>.txt</code> 结尾的文件：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*.txt&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：查找 <code>/var/log</code> 目录中修改时间在 7 天以前的 <code>.log</code> 文件</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;*.log&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -mtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><ol><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的用友金融一面原题：Linux 的常用命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的华为 OD 面经同学 1 一面面试原题：Linux 使用过哪些命令</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的小公司面经同学 5 Java 后端面试原题：Liunx 下查找一个文件怎么做</li><li><a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南（付费）</a>收录的华为 OD 面经同学 1 一面面试原题：chmod 的参数讲一下?</li></ol></blockquote><hr><p>图文详解 1 道 Linux 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二。</p><p><em>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟</em>。</p><p><strong>系列内容</strong>：</p><ul><li><a href="https://javabetter.cn/sidebar/sanfene/javase.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java SE 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/javathread.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java 集合框架篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/collection.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Java 并发编程篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/jvm.html" target="_blank" rel="noopener noreferrer">面渣逆袭 JVM 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/spring.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Spring 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/redis.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Redis 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/mybatis.html" target="_blank" rel="noopener noreferrer">面渣逆袭 MyBatis 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/mysql.html" target="_blank" rel="noopener noreferrer">面渣逆袭 MySQL 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/os.html" target="_blank" rel="noopener noreferrer">面渣逆袭操作系统篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/network.html" target="_blank" rel="noopener noreferrer">面渣逆袭计算机网络篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/rocketmq.html" target="_blank" rel="noopener noreferrer">面渣逆袭 RocketMQ 篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/fenbushi.html" target="_blank" rel="noopener noreferrer">面渣逆袭分布式篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/weifuwu.html" target="_blank" rel="noopener noreferrer">面渣逆袭微服务篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/shejimoshi.html" target="_blank" rel="noopener noreferrer">面渣逆袭设计模式篇 👍</a></li><li><a href="https://javabetter.cn/sidebar/sanfene/linux.html" target="_blank" rel="noopener noreferrer">面渣逆袭 Linux 篇 👍</a></li></ul><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括 Java 基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM 等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',49),n=[l];function o(s,d){return a(),i("div",null,n)}const p=e(r,[["render",o],["__file","linux.html.vue"]]),u=JSON.parse('{"path":"/sidebar/sanfene/linux.html","title":"Linux面试题，1道Linux八股文（1万字1张手绘图），面渣逆袭必看👍","lang":"zh-CN","frontmatter":{"title":"Linux面试题，1道Linux八股文（1万字1张手绘图），面渣逆袭必看👍","shortTitle":"面渣逆袭-Linux","description":"下载次数超 1 万次，1 万字 1 张手绘图，详解 1 道 Linux 面试高频题（让天下没有难背的八股），面渣背会这些 Linux 八股文，这次吊打面试官，我觉得稳了（手动 dog）。","author":"沉默王二","category":["面渣逆袭"],"tag":["面渣逆袭"],"head":[["meta",{"name":"keywords","content":"Linux面试题,Linux,linux,面试题,八股文"}],["meta",{"property":"og:url","content":"https://javabetter.cn/sidebar/sanfene/linux.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Linux面试题，1道Linux八股文（1万字1张手绘图），面渣逆袭必看👍"}],["meta",{"property":"og:description","content":"下载次数超 1 万次，1 万字 1 张手绘图，详解 1 道 Linux 面试高频题（让天下没有难背的八股），面渣背会这些 Linux 八股文，这次吊打面试官，我觉得稳了（手动 dog）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux面试题，1道Linux八股文（1万字1张手绘图），面渣逆袭必看👍\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205700.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[{"level":2,"title":"1. Linux 常用命令","slug":"_1-linux-常用命令","link":"#_1-linux-常用命令","children":[{"level":3,"title":"文件操作的命令有哪些？","slug":"文件操作的命令有哪些","link":"#文件操作的命令有哪些","children":[]},{"level":3,"title":"系统管理的命令有哪些？","slug":"系统管理的命令有哪些","link":"#系统管理的命令有哪些","children":[]},{"level":3,"title":"网络管理的命令有哪些？","slug":"网络管理的命令有哪些","link":"#网络管理的命令有哪些","children":[]},{"level":3,"title":"压缩和解压的命令有哪些？","slug":"压缩和解压的命令有哪些","link":"#压缩和解压的命令有哪些","children":[]},{"level":3,"title":"查找文件的命令有哪些？","slug":"查找文件的命令有哪些","link":"#查找文件的命令有哪些","children":[]}]}],"git":{},"readingTime":{"minutes":5.91,"words":1774},"filePathRelative":"sidebar/sanfene/linux.md","excerpt":"<h2>1. Linux 常用命令</h2>\\n<p>推荐阅读：<a href=\\"https://javabetter.cn/pdf/linux.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">常用高频 Linux 速查备忘手册</a></p>\\n<p>我自己常用的 Linux 命令有 top 查看系统资源、ps 查看进程、netstat 查看网络连接、ping 测试网络连通性、find 查找文件、chmod 修改文件权限、kill 终止进程、df 查看磁盘空间、free 查看内存使用、service 启动服务、mkdir 创建目录、rm 删除文件、rmdir 删除目录、cp 复制文件、mv 移动文件、zip 压缩文件、unzip 解压文件等等这些。</p>"}');export{p as comp,u as data};
