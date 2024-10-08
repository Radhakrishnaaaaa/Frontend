import React, { useEffect, useRef } from "react";

function TermsEditor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          
          config={{
            toolbar: {
              items: [
                'heading',
                '|',                
                'bulletedList',
                'numberedList',
                '|',
                'undo',
                'redo'
              ]
            },
            ckfinder: {            
              uploadUrl: "" 
            }
          }}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();            
            onChange(data);
          }}
          
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default TermsEditor;
