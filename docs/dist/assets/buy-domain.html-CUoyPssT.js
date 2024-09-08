import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as r}from"./app-CoUEeJS-.js";const o={},i=r('<p>购买域名可以通过多个服务商，比如说阿里云、百度云、腾讯云。</p><p>我这里以阿里云为例，购入一个 <a href="https://javabetter.cn/" target="_blank" rel="noopener noreferrer">tobebetterjavaer.com</a> 的域名（寓意 二哥的Java进阶之路）。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在此之前呢，我已经购买了一台阿里云的服务器，2核4G内存的轻量级云服务器。就是<a href="https://javabetter.cn/szjy/buy-cloud-server.html" target="_blank" rel="noopener noreferrer">上次带大家白票的那波</a>，我自己也购入了一台。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这台服务器上目前已经安装了<a href="https://javabetter.cn/szjy/install-baota-mianban.html" target="_blank" rel="noopener noreferrer">宝塔面板</a>、<a href="https://javabetter.cn/nginx/nginx.html" target="_blank" rel="noopener noreferrer">Nginx</a>，并且可以通过 IP 地址成功访问 80 端口。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我想做什么呢？</p><p><strong>我希望可以通过域名直接访问而不是 IP</strong>！</p><p>直接在浏览器地址栏里输入域名访问肯定是不行的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那该怎么办呢？</p><p>进行<strong>域名解析</strong>。当我们购买了一台云服务器后，系统会默认给这台服务器分配一个已经绑定的 IP 地址。但由于 IP 地址是由数组组成的，不方便记忆，所以就使用域名来代替。</p><p>那<strong>域名解析</strong>就是把域名指向网站的 IP 地址，让用户通过域名就可以访问到网站的一种服务。</p><p>阿里云是通过云解析 DNS 提供域名解析服务的。DNS，全称 Domain Name System，也就是域名系统，是一个将域名和IP地址相互映射的分布式数据库，以便用户访问互联网。</p><p>云解析 DNS 支持 A、AAAA 、CNAME 等记录类型。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入域名控制台，选择要解析的域名，点击「解析」会跳转到解析设置页面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>直接点击「新手指导」按钮，填写服务器的 IP 地址。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该方法可以同时添加 www 和 @ 记录，成功后，可以通过带 www 和不带 www 的方式访问网站。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>主机记录 @ 表示可以直接通过不带 www 的域名访问，也就是 <a href="https://javabetter.cn/" target="_blank" rel="noopener noreferrer">tobebetterjavaer.com</a>；</li><li>主机记录 www 表示可以带 www 的域名访问，也就是 <a href="https://javabetter.cn/" target="_blank" rel="noopener noreferrer">www.tobebetterjavaer.com</a></li></ul><p>TTL 为缓存时间，数值越小，表示修改记录生效的时间越快，默认为10分钟。</p><p>记得对域名进行实名认证，认证通过后（否则域名会处于锁定状态 serverhold），再次刷新页面，就可以访问成功了！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>nice！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',29),n=[i];function b(g,p){return a(),t("div",null,n)}const j=e(o,[["render",b],["__file","buy-domain.html.vue"]]),m=JSON.parse('{"path":"/szjy/buy-domain.html","title":"购买域名&域名解析","lang":"zh-CN","frontmatter":{"category":["知识库搭建"],"tag":["知识库搭建"],"title":"购买域名&域名解析","shortTitle":"购买域名&域名解析","description":"购买域名可以通过多个服务商，比如说阿里云、百度云、腾讯云。 我这里以阿里云为例，购入一个 tobebetterjavaer.com 的域名（寓意 二哥的Java进阶之路）。 在此之前呢，我已经购买了一台阿里云的服务器，2核4G内存的轻量级云服务器。就是上次带大家白票的那波，我自己也购入了一台。 这台服务器上目前已经安装了宝塔面板、Nginx，并且可以通...","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/szjy/buy-domain.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"购买域名&域名解析"}],["meta",{"property":"og:description","content":"购买域名可以通过多个服务商，比如说阿里云、百度云、腾讯云。 我这里以阿里云为例，购入一个 tobebetterjavaer.com 的域名（寓意 二哥的Java进阶之路）。 在此之前呢，我已经购买了一台阿里云的服务器，2核4G内存的轻量级云服务器。就是上次带大家白票的那波，我自己也购入了一台。 这台服务器上目前已经安装了宝塔面板、Nginx，并且可以通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-02.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"知识库搭建"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"购买域名&域名解析\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-02.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-03.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-04.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-05.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-06.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-07.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-08.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-09.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-10.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.22,"words":667},"filePathRelative":"szjy/buy-domain.md","excerpt":"<p>购买域名可以通过多个服务商，比如说阿里云、百度云、腾讯云。</p>\\n<p>我这里以阿里云为例，购入一个 <a href=\\"https://javabetter.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">tobebetterjavaer.com</a> 的域名（寓意 二哥的Java进阶之路）。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-02.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{j as comp,m as data};
