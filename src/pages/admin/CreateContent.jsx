import React, { useState } from 'react'
import Editor from '../../components/editor/Editor'

export default function CreateContent() {
  const [value, setValue] = useState(''); // Initialize value to an empty string

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value).then(() => {
        alert('Content copied to clipboard!');
      }).catch(err => {
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
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleCopy} // Add the copy functionality here
        >
          Copy
        </button>
      </div>
      <div className="h-[calc(100%-64px)] p-4 flex justify-between space-x-2">
        <div className="w-1/2 overflow-y-auto">
          <Editor value={value} setValue={setValue} />
        </div>
        <div className="w-1/2 overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>
      </div>
    </div>
  );
}
