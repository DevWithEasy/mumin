import { useState } from "react";
import { Editor } from "../../components/editor/Editor";

export default function CreateContent() {
  const [value, setValue] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setIsCopied(true)
          setTimeout(() => {
            setIsCopied(false)
          }, 1000);
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
          className="flex space-x-2 items-center"
        >
          {isCopied&&<spna className='px-4 bg-green-200 rounded'>Copied</spna>}
          <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={()=>setValue('')}
        >
          Clear
        </button>
        </div>
      </div>
      <div className="h-[calc(100%-64px)] p-4 flex justify-between space-x-2">
        <div className="w-1/2 overflow-y-auto">
          <Editor value={value} setValue={setValue} />
        </div>
        <div className="w-1/2 overflow-y-auto">
        <div className="preview"  dangerouslySetInnerHTML={{__html : value}}/>
        </div>
      </div>
    </div>
  );
}