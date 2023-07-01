## markdown-it-pdf

PDF viewer for markdown-it

## Installation

```
npm install markdown-it-pdf
```

## Usage

```js
import markdownIt from "markdown-it";
import markdownItPdf from "markdown-it-pdf";
const md = new markdownIt("default", {
  html: true
});
md.use(markdownItPdf);
// You can also write like this.
// md.use(require(markdown-it-pdf));
const pdfUrl =
  "https://0eta0.github.io/markdown-it-pdf/test.pdf";

md.render(`@[pdf](${pdfUrl})`);
```

### Options
```js
md.use(require(markdown-it-pdf), {
  showUrl: true
});
```

If you add option "showUrl", the URL link will attach after PDF viewer.

## Development

### Test
```
npm test
```