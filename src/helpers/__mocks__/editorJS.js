/* eslint-disable import/no-mutable-exports */
import Editor from './EditorJsConfig';

export let editor = '';

const renderEditor = async () => {
  if (!editor) {
    editor = await Editor();
  }
};

export default renderEditor;
