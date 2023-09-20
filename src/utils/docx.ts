import { saveAs } from "file-saver";
import HTMLtoDOCX from "html-to-docx";
import moment from "moment";

/**
 * Save HTML string into .docx file
 * @param data HTML string of file contents to be saved
 * @example saveDocxFile("<p>Hello, World</p>");
 */
const saveDocxFile = async (data: string): Promise<void> => {
  const doc = await HTMLtoDOCX(data, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
    font: "Dialog LT Com Light",
  });
  const dateString = moment(new Date()).format("DD-MM-YYYY@HH-mm");
  saveAs(doc, `${dateString}.docx`);
};

const renderHTML = (str: string): HTMLElement => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

export { renderHTML,saveDocxFile };
