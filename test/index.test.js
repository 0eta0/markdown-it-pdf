import markdownIt from "markdown-it";

const md = new markdownIt("default", {
  html: true,
});

describe("Output Test With Valid URL", () => {
  const pdfUrl = "https://0eta0.github.io/markdown-it-pdf/test.pdf";

  it("Should return PDF viewer and URL", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p><object data="${pdfUrl}" type="application/pdf" width="100%" height="100%" class="pdf-container"><iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;">This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfUrl}">Download PDF</a></iframe></object><a href="${pdfUrl}">${pdfUrl}</a></p>`.trim()
    );
  });

  it("Should return only PDF viewer", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p><object data="${pdfUrl}" type="application/pdf" width="100%" height="100%" class="pdf-container"><iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;">This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfUrl}">Download PDF</a></iframe></object></p>`.trim()
    );
  });
});

describe("Output Test With Invalid URL 1", () => {
  const pdfUrl = "https://0eta0.github.io/markdown-it-pdf/test.pdf";

  it("Should return PDF viewer and URL", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p><object data="${pdfUrl}" type="application/pdf" width="100%" height="100%" class="pdf-container"><iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;">This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfUrl}">Download PDF</a></iframe></object><a href="${pdfUrl}">${pdfUrl}</a></p>`.trim()
    );
  });

  it("Should return only PDF viewer", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p><object data="${pdfUrl}" type="application/pdf" width="100%" height="100%" class="pdf-container"><iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;">This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfUrl}">Download PDF</a></iframe></object></p>`.trim()
    );
  });
});

describe("Output Test With Invalid URL 2", () => {
  const pdfUrl = "https:/0eta0.github.io/markdown-it-pdf/testa.pdf";

  it("Should return original markdown", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p>@[pdf](${pdfUrl})</p>`.trim()
    );
  });

  it("Should return original markdown", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl})`).trim()).toBe(
      `<p>@[pdf](${pdfUrl})</p>`.trim()
    );
  });
});

describe("Output Test With Invalid Input 1", () => {
  const pdfUrl = "https://0eta0.github.io/markdown-it-pdf/test.pdf";

  it("Should return markdown not enough ) at end", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl}`).trim()).toBe(
      `<p>@[pdf](${pdfUrl}</p>`.trim()
    );
  });

  it("Should return markdown not enough ) at end", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pdf](${pdfUrl}`).trim()).toBe(
      `<p>@[pdf](${pdfUrl}</p>`.trim()
    );
  });
});

describe("Output Test With Invalid Input 2", () => {
  const pdfUrl = "https://0eta0.github.io/markdown-it-pdf/test.pdf";

  it("Should return Link with @ at head", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pf](${pdfUrl})`).trim()).toBe(
      `<p>@<a href="${pdfUrl}">pf</a></p>`.trim()
    );
  });

  it("Should return Link with @ at head", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`@[pf](${pdfUrl})`).trim()).toBe(
      `<p>@<a href="${pdfUrl}">pf</a></p>`.trim()
    );
  });
});

describe("Output Test With Invalid Input 3", () => {
  const pdfUrl = "https://0eta0.github.io/markdown-it-pdf/test.pdf";

  it("Should return general Link with pdf as title", () => {
    const showUrl = true;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`[pdf](${pdfUrl})`).trim()).toBe(
      `<p><a href="${pdfUrl}">pdf</a></p>`.trim()
    );
  });

  it("Should return general Link with pdf as title", () => {
    const showUrl = false;
    md.use(require("../"), {
      showUrl: showUrl,
    });
    expect(md.render(`[pdf](${pdfUrl})`).trim()).toBe(
      `<p><a href="${pdfUrl}">pdf</a></p>`.trim()
    );
  });
});
