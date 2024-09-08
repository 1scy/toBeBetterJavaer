import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as r}from"./app-CoUEeJS-.js";const s={},n=r(`<p>上一次，我们完成<a href="https://javabetter.cn/szjy/buy-domain.html" target="_blank" rel="noopener noreferrer">域名解析</a>后，发现浏览器地址栏里的域名被提示为不安全，就是因为它还是个宝宝，没有从 HTTP 升级为 HTTPS。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那怎么升级为 HTTPS 证书呢？可以直接通过阿里云购买 SSL 证书，但特么巨贵！</p><p>本来想尝试一下 AWS 的免费 SSL 证书，但卡到验证码这一步就是收不到信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>索性就还用 FreeSSL 吧。</p><p>FreeSSL.cn 是一个提供免费HTTPS证书申请的网站，网址如下：</p><blockquote><p><a href="https://freessl.cn" target="_blank" rel="noopener noreferrer">https://freessl.cn</a></p></blockquote><p>输入域名 tobebetterjavaer.com 选择 trustAsia 品牌证书，点击「创建」，这次我选择的是三年期自动化（刚好我的服务器申请的是三年，域名也是三年），9.9 元，还是非常良心的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>微信/支付宝支付完成后会跳到证书的订单列表。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择「更多操作」里的订单详情，会跳转到 CertCloud 页的管理订单。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「提交 CSR」后点击「提交」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来就到了域名验证环节，点击「获取验证信息」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>切换到域名解析设置页，准备添加记录。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>按照 CertCloud 提供的域名验证信息，添加记录。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>添加完成后切换到 CertCloud，点击「域名验证」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果不确定上一步的记录是否添加成功，可以点击「诊断」按钮进行测试，如果没有问题会提示匹配成功的信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后，点击「我已完成配置，检测一下」，如果没有问题，会先提示等待 CA 颁发证书，之后再次检测会提示「证书已签发，请刷新页面查看」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好的，直接刷新页面，可以看到订单状态已经变成「已签发」的状态。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击证书操作中的「下载证书」，选择适用于 Nginx 的 PEM 格式证书，点击下载。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用 <a href="https://javabetter.cn/gongju/tabby.html" target="_blank" rel="noopener noreferrer">Tabby 终端</a>的「SFTP」将证书上传到网站的云服务器。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开<a href="https://javabetter.cn/szjy/install-baota-mianban.html" target="_blank" rel="noopener noreferrer">宝塔面板</a>，准备配置 Nginx 的 SSL 证书。将以下信息复制到 Nginx 的配置文件中，保存后重新加载配置。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># HTTPS server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen       443 ssl;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate      /home/cert/nginx/tobebetterjavaer.com_cert_chain.pem;</span></span>
<span class="line"><span>    ssl_certificate_key  /home/cert/nginx/tobebetterjavaer.com_key.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>    ssl_session_timeout  5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /home/www;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得在宝塔面板和云服务器后台放行 443 端口。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在地址栏访问 <a href="https://javabetter.cn" target="_blank" rel="noopener noreferrer">https://javabetter.cn</a> 就可以看到我们的域名已经升级为 HTTPS 了（安全锁的小图标也显示出来了）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这时候，如果我们访问 80 端口的 http，仍然是可以的。只不过仍然会显示一个不安全的提示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，我们需要将 HTTP 重定向到 HTTPS。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  tobebetterjavaer.com www.tobebetterjavaer.com;</span></span>
<span class="line"><span>    return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉原来的 80 端口监听，改为 return 跳转。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次刷新原来的 HTTP 访问链接，可以看到已经跳转到 HTTPS 了，如果你查看地址栏的话，也会看到地址变成了 [https://javabetter.cn](https://javabetter.cn。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>希望这个小破站能自力更生地活下去。目前已有的花费有：</p><ul><li>阿里云服务器：3 年 204 元</li><li>域名：3 年 273 元</li><li>SSL 证书：3 年 9.9 元</li></ul><p>希望能给学习 Java 的小伙伴提供一点点帮助，二哥就感觉值了！</p><p>到此为止，《二哥的Java进阶之路》网站的硬件设施就全部完善了，她已经是个成熟的宝宝了。</p><p>希望百度和谷歌等搜索引擎尽快收录，后面也会去学习一些 SEO 方面的知识，提高一下网站的排名，让网站获得更多的流量，从而提升品牌的影响力。</p><p>恭喜！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,55),i=[n];function p(o,b){return a(),t("div",null,i)}const l=e(s,[["render",p],["__file","https-domain.html.vue"]]),v=JSON.parse('{"path":"/szjy/https-domain.html","title":"给域名配置HTTPS证书","lang":"zh-CN","frontmatter":{"category":["知识库搭建"],"tag":["知识库搭建"],"title":"给域名配置HTTPS证书","shortTitle":"给域名配置HTTPS证书","description":"上一次，我们完成域名解析后，发现浏览器地址栏里的域名被提示为不安全，就是因为它还是个宝宝，没有从 HTTP 升级为 HTTPS。 那怎么升级为 HTTPS 证书呢？可以直接通过阿里云购买 SSL 证书，但特么巨贵！ 本来想尝试一下 AWS 的免费 SSL 证书，但卡到验证码这一步就是收不到信息。 索性就还用 FreeSSL 吧。 FreeSSL.cn ...","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/szjy/https-domain.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"给域名配置HTTPS证书"}],["meta",{"property":"og:description","content":"上一次，我们完成域名解析后，发现浏览器地址栏里的域名被提示为不安全，就是因为它还是个宝宝，没有从 HTTP 升级为 HTTPS。 那怎么升级为 HTTPS 证书呢？可以直接通过阿里云购买 SSL 证书，但特么巨贵！ 本来想尝试一下 AWS 的免费 SSL 证书，但卡到验证码这一步就是收不到信息。 索性就还用 FreeSSL 吧。 FreeSSL.cn ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"知识库搭建"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"给域名配置HTTPS证书\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-01.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-02.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-03.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-04.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-05.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-06.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-07.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-08.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-09.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-10.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-11.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-12.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-13.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-14.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-15.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-16.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-17.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-18.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-19.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-20.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.44,"words":1031},"filePathRelative":"szjy/https-domain.md","excerpt":"<p>上一次，我们完成<a href=\\"https://javabetter.cn/szjy/buy-domain.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">域名解析</a>后，发现浏览器地址栏里的域名被提示为不安全，就是因为它还是个宝宝，没有从 HTTP 升级为 HTTPS。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-https-01.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{l as comp,v as data};
