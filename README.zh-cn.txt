# markdown-it-pdf

markdown-it 的 PDF 查看器

注意：
这不是一个将 Markdown 转换为 PDF 的插件。


## 安装

```
npm install markdown-it-pdf
```


## 使用方法

```js
import markdownIt from "markdown-it";
import markdownItPdf from "markdown-it-pdf";
const md = new markdownIt("default", {
  html: true
});
md.use(markdownItPdf);
// 你也可以这样写：
// md.use(require(markdown-it-pdf));
const pdfUrl =
  "https://0eta0.github.io/markdown-it-pdf/test.pdf";

md.render(`@[pdf](${pdfUrl})`);
```

### Chrome 浏览器运行结果

!['Result'](./docs/result.png)

### 配置选项
```js
md.use(require(markdown-it-pdf), {
  showUrl: true
});
```

如果你添加了 "showUrl" 选项，URL 链接将附加在 PDF 查看器之后。

### Chrome 浏览器运行结果

!['Result'](./docs/result_with_url.png)


## 开发

### 测试
```
npm test
```
