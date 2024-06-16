import { useEffect, useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tool";
import React from "react";

function App() {
  const ReactEditorJS = createReactEditorJS();
  const editorCore = React.useRef(null);
  const [data, setData] = useState({});

  const handleInitialize = React.useCallback((instance: any) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    setData(savedData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container m-5">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-start">
          <button className="btn btn-sm btn-dark" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="border mt-5 p-4 rounded">
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            onInitialize={handleInitialize}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
