import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import TinyEditor from "../../components/editor/TinyEditor";

export default function SawmUpdate() {
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isDescription, setIsDescription] = useState(true);
  const params = useParams();
  const desRef = useRef()
  const refRef = useRef()

  const updateTopics = () => {
    fetch(`http://localhost:8080/api/generate/sawm/topics/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, reference }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.description);
        setReference(data.reference);
        setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCopy = () => {
    if (value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      alert("No content to copy!");
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/generate/sawm/topics/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setDescription(data.description);
        setReference(data.reference);
      });
  }, []);

  return (
    <div className="h-screen">
      <div className="h-16 p-4 bg-gray-50 flex justify-between items-center">
        <h1>Create Content</h1>
        <div className="flex space-x-2 items-center">
          {isCopied && (
            <spna className="px-4 bg-green-200 rounded">Copied</spna>
          )}
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={updateTopics}
          >
            Update
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => setIsDescription(!isDescription)}
          >
            {!isDescription ? "Reference" : "Description"}
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => setValue("")}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="h-[calc(100%-64px)] p-4 flex justify-between space-x-2">
        <div className="w-1/2 overflow-y-auto">
          {isDescription ? (
            // <Editor value={description} setValue={setDescription} />
            <TinyEditor editorRef={desRef} value={description} setValue={setDescription}/>
          ) : (
            // <Editor value={reference} setValue={setReference} />
            <TinyEditor editorRef={refRef} value={reference} setValue={setReference}/>
          )}
        </div>
        <div className="w-1/2 overflow-y-auto">
          {isDescription ? (
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: reference }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
