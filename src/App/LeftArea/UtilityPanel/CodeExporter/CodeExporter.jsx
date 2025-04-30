import React from 'react';
import './CodeExporter.css';
import fileSaver from "file-saver/dist/FileSaver";
import {useMainStore} from "hooks/stores/useMainStore";

export function CodeExporter() {
  const code = useMainStore((state) => state.code);
  const handleDownloadCodeBtn = () => {
    //props.workspace.runCode();
    const blob = new Blob([code], {type: "text/c;charset=utf-8"});
    fileSaver.saveAs(blob, "main.c");
  }

  return (
    <div className="utilitySubPanel">
      <h3>Export</h3>
      <button onClick={handleDownloadCodeBtn}><p>Download code</p></button>
    </div>
  )
}