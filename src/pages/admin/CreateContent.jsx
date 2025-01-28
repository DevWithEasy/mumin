import { useState } from "react";
import { Editor } from "../../components/editor/Editor";

export default function CreateContent() {
  const [value, setValue] = useState('');
  const [html,setHtml] = useState(null);

  const handleCopy = () => {
    if (value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          alert('Content copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    } else {
      alert('No content to copy!');
    }
  };

  return (
    <div className="h-screen">
      <div className="h-16 p-4 bg-gray-50 flex justify-between items-center">
        <h1>Create Content</h1>
        <div
          className="flex space-x-2"
        >
          <button 
            onClick={() => {
              if(!html){
                setHtml(value)
              }else{
                setHtml(null)
              }
            }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {html ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
        </div>
      </div>
      <div className="h-[calc(100%-64px)] p-4 flex justify-between space-x-2">
        <div className="w-1/2 overflow-y-auto">
          <Editor value={value} setValue={setValue} />
        </div>
        <div className="w-1/2 overflow-y-auto">
          <div>Preview:</div>
          {html && <div className="preview"  dangerouslySetInnerHTML={{__html : value}}/>}
        </div>
      </div>
    </div>
  );
}