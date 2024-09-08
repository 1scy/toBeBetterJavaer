import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-CoUEeJS-.js";const n={},t=e(`<h2 id="前后端分离项目-如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#前后端分离项目-如何解决跨域问题"><span>前后端分离项目，如何解决跨域问题？</span></a></h2><p>跨域问题是前后端分离项目中非常常见的一个问题，举例来说，编程猫（<a href="https://github.com/itwanger/coding-more" target="_blank" rel="noopener noreferrer">codingmore</a>）学习网站的前端服务跑在 8080 端口下，后端服务跑在 9002 端口下，那么前端在请求后端接口的时候就会出现跨域问题。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>403 Forbidden 是HTTP协议中的一个状态码（Status Code），意味着后端服务虽然成功解析了请求，但前端却没有访问该资源的权限。</p><p>那怎么解决这个问题呢？通常有两个思路：</p><ul><li>前端使用 Nodejs 代理（开发环境下，生产环境下可以用 Nginx 替代）</li><li>或者后端开启跨域资源共享</li></ul><h3 id="一、关于跨域" tabindex="-1"><a class="header-anchor" href="#一、关于跨域"><span>一、关于跨域</span></a></h3><p>跨域对于前后端开发者来说，就像一块狗皮膏药，无论是面试还是开发中，都会经常遇到。</p><p>之所以出现跨域问题，是因为<a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener noreferrer">浏览器的同源策略</a>，为了隔离潜在的恶意文件，为了防御来自歪门邪道的攻击，浏览器限制了从同一个源加载的文档或脚本与来自另一个源的资源进行交互。</p><p>前面我们提到了，前端跑在 8080 端口下，后端跑在 9002 端口下，这种情况就属于不同的源（域名不同，协议不同，端口不同），所以 8080 端口下的前端请求直接访问 9002 端口下的后端接口时就访问失败了。</p><p>那正确的打开方式是什么呢？我们前面也提到了，前端使用 Nodejs 代理或者后端开启跨域资源共享，我们一一来实践下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="二、nodejs-代理" tabindex="-1"><a class="header-anchor" href="#二、nodejs-代理"><span>二、Nodejs 代理</span></a></h3><p>在 Nodejs 出现之前，JavaScript 编写的程序通常需要在用户的浏览器上执行，Node.js 出现后，JavaScript 也能用于服务端编程了。Nodejs 一系列的内置模块使得程序可以脱离 IIS、Apache 这种 Web 服务作为独立的服务器执行。</p><p>我们使用 Nodejs 来解决跨域问题的思路就是，在本地创建一个虚拟服务器，对 8080 端口下的前端请求进行代理，同时接收 9002 端口下的服务器端响应，这样服务端和服务端进行数据的交互就不会出现跨域问题了。</p><p>第一步，配置 Nodejs 代理服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  dev: {</span></span>
<span class="line"><span>    // Paths</span></span>
<span class="line"><span>    assetsSubDirectory: &#39;static&#39;,</span></span>
<span class="line"><span>    assetsPublicPath: &#39;/&#39;,</span></span>
<span class="line"><span>    proxyTable: {</span></span>
<span class="line"><span>      &#39;/api&#39;: {</span></span>
<span class="line"><span>        target: &#39;http://localhost:9002&#39;, // 你请求的第三方接口</span></span>
<span class="line"><span>        changeOrigin: false, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题</span></span>
<span class="line"><span>        pathRewrite: { // 路径重写，</span></span>
<span class="line"><span>          &#39;^/api&#39;: &#39;&#39; // 替换target中的请求地址，也就是说以后你在请求http://api.codingmore.top/v2/XXXXX这个地址的时候直接写成/api即可。</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，配置前端访问请求路径</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>module.exports = merge(prodEnv, {</span></span>
<span class="line"><span>  NODE_ENV: &#39;&quot;development&quot;&#39;,</span></span>
<span class="line"><span>  VUE_APP_BASE_API: &#39;&quot;/api&quot;&#39;</span></span>
<span class="line"><span>  // VUE_APP_BASE_API: &#39;&quot;http://localhost:9002&quot;&#39;</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，重启前端服务</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次点击「登录」按钮，可以看到请求的 URL 发生了改变，原来是 <code>http://localhost:9002/users/login</code>，现在是 <code>http://localhost:8080/api/users/login</code>。与此同时，可以看到多了一个 Remote Address，端口也是 8080，也就是说经过 Nodejs 的代理，前后端的交互在同一个源下面了，这样就不会发生跨域问题了。</p><p>同时，可以看得到，服务器端返回的状态码变成了 200，表示请求成功。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="三、开启跨域资源共享" tabindex="-1"><a class="header-anchor" href="#三、开启跨域资源共享"><span>三、开启跨域资源共享</span></a></h3><p>跨域资源共享，也就是 Cross-Origin Resource Sharing，简拼为 CORS，是一种基于 HTTP 头信息的机制，通过允许服务器标识除了它自己以外的资源，从而实现跨域访问。</p><p>第一步，开启 CORS 支持</p><p>在 Spring Boot 应用中，加入 CORS 的支持简单到不忍直视，添加一个配置类就可以了。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> GlobalCorsConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CorsFilter</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> corsFilter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        CorsConfiguration</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> config</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> CorsConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 设置你要允许的网站域名</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addAllowedOrigin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://localhost:8080&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        //允许跨域发送cookie</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setAllowCredentials</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        //放行全部原始头信息</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addAllowedHeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        //允许所有请求方法跨域调用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addAllowedMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        UrlBasedCorsConfigurationSource</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> source</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> UrlBasedCorsConfigurationSource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">registerCorsConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/**&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, config);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> CorsFilter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(source);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，重启后端服务，再次点击登录按钮，发现请求已经可以正常访问了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>本例中，后端返回 <code>Access-Control-Allow-Origin: http://localhost:8080</code> 就表示，跑在 9002 端口下的后端接口可以被 8080 端口的前端请求访问。</p><p>如果允许所有域名进行跨域调用的话，只需改变一行代码即可。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//允许所有域名进行跨域调用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addAllowedOriginPattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 设置你要允许的网站域名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//        config.addAllowedOrigin(&quot;http://localhost:8080&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 login 这种简单的请求来说，它们是不会触发 CORS 预检的，因此不需要在服务器端增加其他配置就可以了。那什么是简单请求呢？</p><p>1）请求方法是以下三种方法之一：</p><ul><li>HEAD</li><li>GET</li><li>POST</li></ul><p>2）HTTP 的头信息不超出以下几种字段：</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type：只限于三个值 <code>application/x-www-form-urlencoded、multipart/form-data、text/plain</code></li></ul><p>那对于会触发 CORS 预检的非简单请求（比如说请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 <code>application/json</code>，或者请求消息头包含了一些自定义的字段），该怎么办呢？</p><p>非简单请求在正式通信之前，会增加一次 HTTP 查询请求，称为“预检”请求。预检请求通过后，才会返回正常的响应内容。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>拿编程猫的文章管理页来举例，该页面会向后端发起一个 <code>posts/queryPageable</code> 的分页查询，该请求包含了一个自定义的消息头 Authorization，于是浏览器认为该请求是一个非简单请求，然后就会自动发起一次 OPTIONS 请求，但由于我们的 Spring Boot 项目整合了 SpringsScurity 安全管理框架，没有对OPTIONS请求放开登录认证，导致验证失败，文章分页请求的响应数据就没有返回回来。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第三步，通过以下代码给 OPTIONS 请求放行。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> SecurityConfig</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> WebSecurityConfigurerAdapter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> configure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">HttpSecurity</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> httpSecurity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> throws</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ExpressionUrlAuthorizationConfigurer</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">HttpSecurity</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ExpressionInterceptUrlRegistry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> registry </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> httpSecurity</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">authorizeRequests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        //允许跨域请求的OPTIONS请求</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        registry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">antMatchers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">HttpMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">OPTIONS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">permitAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次重启后端服务，重新访问文章列表接口，发现有响应数据了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>非简单请求必须首先使用 OPTIONS 请求方法发起一个预检请求到服务器端，以获知服务器是否允许该实际请求。&quot;预检请求“的使用，避免了跨域请求对服务器的用户数据造成未预期的影响。</p><p>我们来通过两张图片简单总结一下预检请求的整个过程，第一张，发起 OPTIONS 预检请求：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二章，发起正式请求：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="四、源码路径" tabindex="-1"><a class="header-anchor" href="#四、源码路径"><span>四、源码路径</span></a></h3><p>编程猫后端源码：</p><blockquote><p>https://github.com/itwanger/coding-more</p></blockquote><p>编程猫后台管理的前端源码：</p><blockquote><p>https://github.com/itwanger/codingmore-admin-web</p></blockquote><p>参考链接：</p><blockquote><p>跨域：https://segmentfault.com/a/1190000015597029 CORS：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS 阮一峰：https://www.ruanyifeng.com/blog/2016/04/cors.html 简单请求+预检请求：https://github.com/amandakelake/blog/issues/62</p></blockquote><hr><p><strong>本篇已收录至 GitHub 上星标 1.6k+ star 的开源专栏《二哥的Java进阶之路》，据说每一个优秀的 Java 程序员都喜欢她，风趣幽默、通俗易懂。内容包括 Java 基础、Java 并发编程、Java 虚拟机、Java 企业级开发、Java 面试等核心知识点。学 Java，就认准 二哥的Java进阶之路</strong>😄。</p><p><a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">https://github.com/itwanger/toBeBetterJavaer</a></p><p>star 了这个仓库就等于你拥有了成为了一名优秀 Java 工程师的潜力。也可以戳下面的链接跳转到《二哥的Java进阶之路》的官网网址，开始愉快的学习之旅吧。</p><p><a href="https://javabetter.cn/" target="_blank" rel="noopener noreferrer">https://javabetter.cn/</a></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><em>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟</em>。</p>`,67),l=[t];function p(r,h){return a(),s("div",null,l)}const k=i(n,[["render",p],["__file","cors.html.vue"]]),c=JSON.parse('{"path":"/springboot/cors.html","title":"","lang":"zh-CN","frontmatter":{"description":"前后端分离项目，如何解决跨域问题？ 跨域问题是前后端分离项目中非常常见的一个问题，举例来说，编程猫（codingmore）学习网站的前端服务跑在 8080 端口下，后端服务跑在 9002 端口下，那么前端在请求后端接口的时候就会出现跨域问题。 403 Forbidden 是HTTP协议中的一个状态码（Status Code），意味着后端服务虽然成功解析...","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/springboot/cors.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:description","content":"前后端分离项目，如何解决跨域问题？ 跨域问题是前后端分离项目中非常常见的一个问题，举例来说，编程猫（codingmore）学习网站的前端服务跑在 8080 端口下，后端服务跑在 9002 端口下，那么前端在请求后端接口的时候就会出现跨域问题。 403 Forbidden 是HTTP协议中的一个状态码（Status Code），意味着后端服务虽然成功解析..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"沉默王二"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-1.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-2.gif\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-3.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-4.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-5.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-6.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-7.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-8.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-9.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-10.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/aop-log-5.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"前后端分离项目，如何解决跨域问题？","slug":"前后端分离项目-如何解决跨域问题","link":"#前后端分离项目-如何解决跨域问题","children":[{"level":3,"title":"一、关于跨域","slug":"一、关于跨域","link":"#一、关于跨域","children":[]},{"level":3,"title":"二、Nodejs 代理","slug":"二、nodejs-代理","link":"#二、nodejs-代理","children":[]},{"level":3,"title":"三、开启跨域资源共享","slug":"三、开启跨域资源共享","link":"#三、开启跨域资源共享","children":[]},{"level":3,"title":"四、源码路径","slug":"四、源码路径","link":"#四、源码路径","children":[]}]}],"git":{},"readingTime":{"minutes":6.74,"words":2021},"filePathRelative":"springboot/cors.md","excerpt":"<h2>前后端分离项目，如何解决跨域问题？</h2>\\n<p>跨域问题是前后端分离项目中非常常见的一个问题，举例来说，编程猫（<a href=\\"https://github.com/itwanger/coding-more\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">codingmore</a>）学习网站的前端服务跑在 8080 端口下，后端服务跑在 9002 端口下，那么前端在请求后端接口的时候就会出现跨域问题。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/cors-1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{k as comp,c as data};
