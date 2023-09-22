import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { refreshEditor, selectEditorContent, useAppDispatch, useAppSelector } from "@redux/editorSlice";
import { useParams } from "react-router-dom";
import sanitizeHTML from "sanitize-html";

export const Editor = () => {
  const editorContent = useAppSelector(selectEditorContent);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  return (
    <CKEditor
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      editor={ClassicEditor}
      data={id ? editorContent : ""}
      onChange={(_: any, editor: any) => {
        const editor_content = editor.getData();
        dispatch(refreshEditor(sanitizeHTML(editor_content)));
      }}
      onReady={(editor: any) => {
        editor.editing.view.change((writer: any) => {
          writer.setStyle("height", "500px", editor.editing.view.document.getRoot());
        });
      }}
      data-testid="editor-content"
    />
  );
};
