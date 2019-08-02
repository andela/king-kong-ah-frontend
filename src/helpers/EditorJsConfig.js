import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import axios from 'axios';
import ImageTool from '@editorjs/image';
import Paragraph from '@editorjs/paragraph';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import RawTool from '@editorjs/raw';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';

const instance = axios.create({
  headers: {},
});

const uploadImageCallBack = (file) => {
  const url = 'https://api.cloudinary.com/v1_1/druxgvyx3/image/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'kingsmen');
  return instance.post(
    url,
    formData,
    { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
  );
};

const Editor = (data = null) => {
  const editor = new EditorJS({
    holder: 'codex-editor',
    placeholder: 'Start writing now...',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link'],
      },
      list: {
        class: List,
        inlineToolbar: [
          'link',
          'bold',
        ],
      },
      embed: {
        class: Embed,
        inlineToolbar: false,
      },
      image: {
        class: ImageTool,
        inlineToolbar: true,
        config: {
          placeholder: 'Paste image URL',
          uploader: {
            uploadByFile(file) {
              return uploadImageCallBack(file).then(res => ({
                success: 1,
                file: {
                  url: res.data.url,
                },
              }));
            },
            uploadByUrl(url) {
              return uploadImageCallBack(url).then(res => ({
                success: 1,
                file: {
                  url: res.data.url,
                },
              }));
            },
          },
        },
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
      },
      raw: RawTool,
      delimiter: Delimiter,
      code: CodeTool,
      Marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M',
      },
    },
    data,
  });

  return editor;
};

export default Editor;
