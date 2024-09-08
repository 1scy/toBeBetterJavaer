import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,e as s}from"./app-CoUEeJS-.js";const t={},n=s(`<h1 id="_5-6-java-native方法" tabindex="-1"><a class="header-anchor" href="#_5-6-java-native方法"><span>5.6 Java native方法</span></a></h1><p>“三妹，之前我们学习了 Java 中的<a href="https://javabetter.cn/oo/method.html" target="_blank" rel="noopener noreferrer">基本方法</a>，其实 Java 还有一种方法，本地方法，或者叫 native 方法，它与之前的方法有很大的不同。”我放下手中的手机，扭过脸来对三妹说。</p><p>“听起来挺有意思的。”三妹很期待。</p><p>“我会教你用 C语言实现一个 native 方法。”我继续说到，“C语言是另外一种编程语言，你可以点这个<a href="https://javabetter.cn/xuexiluxian/c.html" target="_blank" rel="noopener noreferrer">链接</a>去了解和学习。让我们开始吧”</p><p>类似 Thread 类中的 <code>private native start0()</code> 方法；</p><p>又或者 Object.class 类中的 getClass() 方法、hashCode()方法、clone() 方法，其中方法签名如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() throws CloneNotSupportedException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是用【native】关键词修饰的方法，多数情况下不需要用 Java 语言实现。</p><p>“二哥，为什么要用 native 来修饰方法呢，这样做有什么用？”三妹很乖，但这个问题也问的很掷地有声。</p><p>“好的，三妹，我们一步步来扒拉”。</p><h3 id="_1、jni-java-native-interface" tabindex="-1"><a class="header-anchor" href="#_1、jni-java-native-interface"><span><strong>1、JNI：Java Native Interface</strong></span></a></h3><p>在介绍 native 之前，我们先了解什么是 JNI。</p><p>一般情况下，我们完全可以使用 Java 语言编写程序，但某些情况下，Java 可能满足不了需求，或者不能更好的满足需求，比如：</p><ul><li>①、标准的 Java 类库不支持。</li><li>②、我们已经用另一种语言，比如说 C/C++ 编写了一个类库，如何用 Java 代码调用呢？</li><li>③、某些运行次数特别多的方法，为了加快性能，需要用更接近硬件的语言（比如汇编）编写。</li></ul><p>上面这三种需求，说到底就是如何用 Java 代码调用不同语言编写的代码。那么 JNI 应运而生了。</p><p>从 Java 1.1 开始，Java Native Interface (JNI)标准就成为 Java 平台的一部分，它允许 Java 代码和其他语言编写的代码进行交互。</p><p>JNI 一开始是为了本地已编译语言，尤其是 C 和 C++而设计的，但是它并不妨碍你使用其他语言，只要调用约定受支持就可以了。使用 Java 与本地已编译的代码交互，通常会丧失平台可移植性，但是，有些情况下这样做是可以接受的，甚至是必须的，比如，使用一些旧的库，与硬件、操作系统进行交互，或者为了提高程序的性能。JNI 标准至少保证本地代码能工作能在任何 Java 虚拟机实现下。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-2a6fd1da-8b64-4fe1-bf3b-fbb117774549.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过 JNI，我们就可以通过 Java 程序（代码）调用到操作系统相关的技术实现的库函数，从而与其他技术和系统交互；同时其他技术和系统也可以通过 JNI 提供的相应原生接口调用 Java 应用系统内部实现的功能。</p><p>“二哥，等一下，Java 不是跨平台的吗？如果用 JNI，那么程序不就失去了跨平台的优点？”不得不说，三妹这个问题起到好处。</p><p>“确实是这样的。”我掐灭了中指和无名指之间的烟头，继续娓娓道来。</p><p>JNI 的缺点：</p><ul><li>①、程序不再跨平台。要想跨平台，必须在不同的系统环境下重新编译本地语言部分。</li><li>②、程序不再是绝对安全的，本地代码的不当使用可能导致整个程序崩溃。一个通用规则是，你应该让本地方法集中在少数几个类当中。这样就降低了 Java 和 C/C++ 之间的耦合性。</li></ul><p>目前来讲使用 JNI 的缺点相对于优点还是可以接受的，可能后面随着 Java 的技术发展，我们不在需要 JNI，但是目前 JDK 还是一直提供了对 JNI 标准的支持。</p><h3 id="_2、用-c-语言编写程序本地方法" tabindex="-1"><a class="header-anchor" href="#_2、用-c-语言编写程序本地方法"><span><strong>2、用 C 语言编写程序本地方法</strong></span></a></h3><p>“上面讲解了什么是 JNI，接下来我们来写个例子：如何用 Java 代码调用本地的 C 程序。”我扭头对三妹说，“你注意📢看。”</p><blockquote><p>官方文档如下：<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html</a></p></blockquote><p>步骤如下：</p><p>①、编写带有 native 方法的 Java 类，生成.java 文件；</p><p>②、使用 javac 命令编译所编写的 Java 类，生成.class 文件；</p><p>③、使用 javah -jni java 类名 生成扩展名为 h 的头文件，也即生成 .h 文件；</p><p>④、使用 C/C++（或者其他编程想语言）实现本地方法，创建 .h 文件的实现，也就是创建 .cpp 文件实现.h 文件中的方法；</p><p>⑤、将 C/C++ 编写的文件生成动态连接库，生成 dll 文件；</p><p>下面我们通过一个 HelloWorld 程序的调用来完成这几个步骤。</p><h4 id="_01-编写带有-native-方法的-java-类-hellojni-java" tabindex="-1"><a class="header-anchor" href="#_01-编写带有-native-方法的-java-类-hellojni-java"><span>01）编写带有 native 方法的 Java 类 HelloJNI.java</span></a></h4><p>在 <code>/Users/itwanger/Documents/Github/javabetter/testjni</code> 目录下创建 HelloJNI.java 文件，内容如下所示。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HelloJNI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">loadLibrary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 加载名为 libhello.dylib 的动态链接库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 定义本地方法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> helloJNI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> HelloJNI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">helloJNI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 调用本地方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS：后面执行的命令都将在 testjni 的目录下</strong>。</p><p>解释一下这段代码：</p><p><code>private native void helloJNI()</code>：用 native 声明的方法告知 JVM 调用该方法在外部定义，也就是我们会用 C 语言去实现。</p><p><code>System.loadLibrary(&quot;hello&quot;)</code>：加载动态库，参数 hello 是动态库的名字。我们可以这样理解：程序中的方法 helloJNI() 在程序中没有实现，但是我们下面要调用这个方法，怎么办呢？</p><p>我们就需要对这个方法进行初始化，所以用了 <a href="https://javabetter.cn/oo/static.html" target="_blank" rel="noopener noreferrer">static 代码块进行初始化</a>，后面会讲到。</p><h4 id="_02-编译-hellojni-java" tabindex="-1"><a class="header-anchor" href="#_02-编译-hellojni-java"><span>02）编译 HelloJNI.java</span></a></h4><p>在命令行通过 <code>javac HelloJNI.java</code> 来编译源代码。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-41e11e7f-31c1-4611-9b85-63ec211ff31b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_03-使用-javah-jni-hellojni-生成扩展名为-h-的头文件" tabindex="-1"><a class="header-anchor" href="#_03-使用-javah-jni-hellojni-生成扩展名为-h-的头文件"><span>03）使用 <code>javah -jni HelloJNI</code> 生成扩展名为 h 的头文件</span></a></h4><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-0b08bf51-7bd9-4d06-a0dc-4262c1a71fd5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>PS：Java 9 以后，javah 被弃用，取而代之的是使用 -h 选项来生成头文件，例如 <code>javac -h . ClassName.java</code>。</p></blockquote><p>执行完毕后，会在 HelloJNI.java 所在目录下生成一个名为 HelloJNI.h 的头文件。打开 HelloJNI.h 文件，可以看到如下代码。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-e5c34f63-84df-4a99-96e1-b45ea04929df.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看不懂没关系，无所谓，直到它是自动生成的就好。</p><h4 id="_04-使用-c-语言实现本地方法" tabindex="-1"><a class="header-anchor" href="#_04-使用-c-语言实现本地方法"><span>04）使用 C 语言实现本地方法</span></a></h4><p>创建一个 C 文件 HelloJNI.c，实现本地方法 sayHello。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;jni.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;HelloJNI.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">JNIEXPORT </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> JNICALL </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Java_HelloJNI_helloJNI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">JNIEnv </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> jobject </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello, JNI!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这里需要引入 JNI 头文件，并且实现的方法名称需要与在 Java 中声明的名称一致（<code>HelloJNI_helloJNI</code> HelloJNI 类的 helloJNI 方法）。</p><h4 id="_05-编写编译脚本-compile-sh" tabindex="-1"><a class="header-anchor" href="#_05-编写编译脚本-compile-sh"><span>05）编写编译脚本 compile.sh</span></a></h4><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 编译 HelloJNI.c 文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gcc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/include&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$JAVA_HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/include/darwin&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -shared</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libhello.dylib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> HelloJNI.c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 把生成的 libhello.dylib 文件拷贝到当前目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libhello.dylib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ul><li><code>$JAVA_HOME</code> 是 JDK 的安装路径，需要根据实际情况修改。</li><li>在 macOS 上，动态链接库（hello）的后缀是 .dylib，而不是 Linux 上的 .so。</li></ul><p>这里的 -I 选项是为了告诉编译器头文件的位置，<code>$JAVA_HOME</code> 是 Java 安装目录的路径。</p><h4 id="_06-执行编译脚本" tabindex="-1"><a class="header-anchor" href="#_06-执行编译脚本"><span>06）执行编译脚本</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sh compile.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行完毕后，会在当前目录下生成一个名为 libhello.dylib 的动态链接库。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-e93c8fa8-6e33-4374-81da-8bd9360d1bb4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_07-运行-hellojni" tabindex="-1"><a class="header-anchor" href="#_07-运行-hellojni"><span>07）运行 HelloJNI</span></a></h4><p>执行<code>java HelloJNI</code>命令运行 HelloJNI，如果一切正常，就会在终端上输出 Hello, JNI!。</p><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-34beba0f-8fe8-48d0-aa48-b25c1b504b59.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3、jni-调用-c-的流程图" tabindex="-1"><a class="header-anchor" href="#_3、jni-调用-c-的流程图"><span><strong>3、JNI 调用 C 的流程图</strong></span></a></h3><figure><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-6673cf73-c4dd-4434-b821-0d705f756a73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4、native-关键字" tabindex="-1"><a class="header-anchor" href="#_4、native-关键字"><span><strong>4、native 关键字</strong></span></a></h3><p>“三妹，现在应该知道什么是 native 了吧？”我问三妹。</p><p>“嗯嗯，我来简述一下，二哥你看看我说的是否正确。”</p><p>native 用来修饰方法，用 native 声明的方法表示该方法的实现在外部定义，可以用任何语言去实现它，比如说 C/C++。 简单地讲，一个 native Method 就是一个 Java 调用非 Java 代码的接口。</p><p>native 语法：</p><ul><li>①、修饰方法的位置必须在返回类型之前，和其余的方法控制符前后关系不受限制。</li><li>②、不能用 abstract 修饰，也没有方法体，也没有左右大括号。</li><li>③、返回值可以是任意类型</li></ul><p>“三妹，你学的不错嘛。”我对三妹的学习能力感到非常的欣慰，“<strong>我们在日常编程中看到 native 修饰的方法，只需要知道这个方法的作用是什么，至于别的就不用管了，操作系统会给我们实现，初学的时候也不需要太过深入</strong>。”</p><blockquote><ul><li>Windows 下安装 gcc 教程：<a href="https://blog.csdn.net/altland/article/details/63252757" target="_blank" rel="noopener noreferrer">http://blog.csdn.net/altland/article/details/63252757</a></li><li>native 参考链接：<a href="https://www.zhihu.com/question/28001771/answer/2049534464" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/28001771/answer/2049534464</a></li></ul></blockquote><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,81),l=[n];function h(p,r){return e(),a("div",null,l)}const k=i(t,[["render",h],["__file","native-method.html.vue"]]),c=JSON.parse('{"path":"/oo/native-method.html","title":"手把手教你用 C语言实现 Java native 本地方法","lang":"zh-CN","frontmatter":{"title":"手把手教你用 C语言实现 Java native 本地方法","shortTitle":"Java native方法","description":"掌握C语言实现Java native方法的技巧，提升Java程序性能，深入理解Java Native Interface (JNI)。跟随我们的手把手教程，轻松实现跨语言编程。","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java, C语言, Native方法, JNI,native,本地方法,java native method"}],["meta",{"property":"og:url","content":"https://javabetter.cn/oo/native-method.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"手把手教你用 C语言实现 Java native 本地方法"}],["meta",{"property":"og:description","content":"掌握C语言实现Java native方法的技巧，提升Java程序性能，深入理解Java Native Interface (JNI)。跟随我们的手把手教程，轻松实现跨语言编程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-2a6fd1da-8b64-4fe1-bf3b-fbb117774549.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面向对象编程"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手把手教你用 C语言实现 Java native 本地方法\\",\\"image\\":[\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-2a6fd1da-8b64-4fe1-bf3b-fbb117774549.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-41e11e7f-31c1-4611-9b85-63ec211ff31b.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-0b08bf51-7bd9-4d06-a0dc-4262c1a71fd5.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-e5c34f63-84df-4a99-96e1-b45ea04929df.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-e93c8fa8-6e33-4374-81da-8bd9360d1bb4.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-34beba0f-8fe8-48d0-aa48-b25c1b504b59.png\\",\\"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/oo/native-method-6673cf73-c4dd-4434-b821-0d705f756a73.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"1、JNI：Java Native Interface","slug":"_1、jni-java-native-interface","link":"#_1、jni-java-native-interface","children":[]},{"level":3,"title":"2、用 C 语言编写程序本地方法","slug":"_2、用-c-语言编写程序本地方法","link":"#_2、用-c-语言编写程序本地方法","children":[]},{"level":3,"title":"3、JNI 调用 C 的流程图","slug":"_3、jni-调用-c-的流程图","link":"#_3、jni-调用-c-的流程图","children":[]},{"level":3,"title":"4、native 关键字","slug":"_4、native-关键字","link":"#_4、native-关键字","children":[]}],"git":{},"readingTime":{"minutes":7.96,"words":2388},"filePathRelative":"oo/native-method.md","excerpt":"\\n<p>“三妹，之前我们学习了 Java 中的<a href=\\"https://javabetter.cn/oo/method.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">基本方法</a>，其实 Java 还有一种方法，本地方法，或者叫 native 方法，它与之前的方法有很大的不同。”我放下手中的手机，扭过脸来对三妹说。</p>\\n<p>“听起来挺有意思的。”三妹很期待。</p>\\n<p>“我会教你用 C语言实现一个 native 方法。”我继续说到，“C语言是另外一种编程语言，你可以点这个<a href=\\"https://javabetter.cn/xuexiluxian/c.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">链接</a>去了解和学习。让我们开始吧”</p>"}');export{k as comp,c as data};
