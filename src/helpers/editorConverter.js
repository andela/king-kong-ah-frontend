/* eslint-disable no-case-declarations */
const editorJsConverter = (block) => {
  let articleImage;
  let body;
  switch (block.type) {
  case 'header':
    const { data: { text } } = block;
    body = `${text} `; break;
  case 'image':
    const { data: { file } } = block;
    articleImage = file.url; break;
  case 'paragraph':
    const { data } = block;
    const paragraph = `${data.text} `;
    body = paragraph; break;
  default: break;
  }
  return [body, articleImage];
};

export default editorJsConverter;
