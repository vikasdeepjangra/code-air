/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from "@monaco-editor/react";
import "./CodeArea.css";
import { HouseDoorFill } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { supportedLanguages } from "./LanguageConfig";
import { useRef } from "react";

function NavBar({
  selectedLanguage,
  onRunButtonClick,
}: {
  selectedLanguage: string;
  onRunButtonClick: () => void;
}) {
  return (
    <div id="navBar">
      <div>
        <Link to="/">
          <button type="button" className="btn btn-primary btn-lg home-btn">
            <HouseDoorFill />
          </button>
        </Link>
        <span className="codeAreaDescription ms-4">
          Code Air :::: {selectedLanguage}
        </span>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg run-btn"
          onClick={onRunButtonClick}
        >
          Run
        </button>
      </div>
    </div>
  );
}

function CodeArea() {
  const editorRef = useRef<any>(null);
  const { language } = useParams();
  const defaultConfig = supportedLanguages.find((languageConfig) => {
    if (languageConfig.languageCode === language) {
      return languageConfig;
    }
  });

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  const compileAndRun = async () => {
    const code = editorRef.current?.getValue();
    const {
      language,
      languageCode,
      isCompiled,
      sourceFileName,
      targetFileName,
    } = defaultConfig || {};
    const response = await fetch("http://localhost:3300/compileAndRun", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        language,
        languageCode,
        isCompiled,
        sourceFileName,
        targetFileName,
      }),
    });
    const responseData = await response.json();
    alert(responseData.message);
  };

  return (
    <div className="code-area">
      <div className="code-editor">
        <NavBar
          selectedLanguage={defaultConfig?.language || ""}
          onRunButtonClick={compileAndRun}
        />
        <Editor
          height="92vh"
          defaultLanguage={defaultConfig?.languageCode || ""}
          defaultValue={defaultConfig?.boilerPlateCode || ""}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="code-terminal">
        <h6>Loading...</h6>
      </div>
    </div>
  );
}

export default CodeArea;
