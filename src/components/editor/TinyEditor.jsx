import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor({editorRef,value,setValue}) {
  
  return (
    <Editor
        apiKey='1j3gb9ih1fr1n03tn252jwvncfvceqldahd4cd2a9o913rbm'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={value}
        onEditorChange={(content)=>setValue(content)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
  );
}