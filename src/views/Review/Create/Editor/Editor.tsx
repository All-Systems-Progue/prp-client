import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import sanitizeHTML from "sanitize-html";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { refreshEditor } from "../../../../redux/actions";
import { RootState } from "../../../../redux/store";

export default function Editor(): JSX.Element {
  const editorContent = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();
  const { id } = useParams();

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
          writer.setStyle(
            "height",
            "500px",
            editor.editing.view.document.getRoot()
          );
        });
      }}
      data-testid="editor-content"
    />
  );
}
