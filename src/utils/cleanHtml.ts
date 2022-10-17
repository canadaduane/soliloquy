import xss from "xss";

// TODO: is https://www.npmjs.com/package/autolinker more secure?
import anchorme from "anchorme";

export function cleanHtml(html) {
  const cleanText = xss(html);
  return anchorme({
    input: cleanText,
    options: {
      truncate: 30,
      middleTruncation: true,
      attributes: {
        target: "_blank",
      },
    },
  });
}
