const pdfRule = (state, silent) => {
  const oldPos = state.pos;
  // If not exist @ and [ , end and return false
  if (
    state.src.charCodeAt(oldPos) !== 0x40 /* @ */ ||
    state.src.charCodeAt(oldPos + 1) !== 0x5b /* [ */
  ) {
    return false;
  }

  const PDF_REGEX = /@\[([a-zA-Z].+)]\([\s]*(.*?)[\s]*[)]/im;
  const match = PDF_REGEX.exec(state.src.slice(state.pos, state.src.length));

  if (!match || match.length < 3) return false;

  const serviceName = match[1].toLowerCase();
  if (serviceName !== "pdf") return false;
  let pdfUrl = match[2];
  // pdfUrl is empty
  if (pdfUrl === ")") pdfUrl = "";

  if (!silent) {
    const newState = new state.md.inline.State("pdf", state.md, state.env, []);
    newState.md.inline.tokenize(newState);
    const token = state.push("pdf", "");
    token.url = pdfUrl;
  }
  state.pos += state.src.indexOf(")", state.pos) + 1;
  return true;
};

function tokenizePdf(tokens, idx, md, options) {
  const showUrl = options.showUrl === true;
  const pdfUrl = md.utils.escapeHtml(tokens[idx].url);
  const checkUrl = /https??:\/\/(www.)??\S+/;

  if (checkUrl.test(pdfUrl)) {
    return `<object data="${pdfUrl}" type="application/pdf" width="100%" height="100%" class="pdf-container"><iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;">This browser does not support PDFs. Please download the PDF to view it: <a href="${pdfUrl}">Download PDF</a></iframe></object>${
      showUrl ? '<a href="' + pdfUrl + '">' + pdfUrl + "</a>" : ""
    }`;
  } else {
    return `@[pdf](${pdfUrl})`;
  }
}

module.exports = function pdfPlugin(md, options) {
  md.renderer.rules.pdf = (tokens, idx) =>
    tokenizePdf(tokens, idx, md, options);
  md.inline.ruler.push("pdf", pdfRule);
};
