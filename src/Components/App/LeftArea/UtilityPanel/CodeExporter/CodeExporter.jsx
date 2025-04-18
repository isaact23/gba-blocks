import './CodeExporter.css';
import fileSaver from "file-saver/dist/FileSaver";

export function CodeExporter(props) {
  const handleDownloadCodeBtn = () => {
    props.workspace.runCode();
    const blob = new Blob([props.workspace.getCode()], {type: "text/c;charset=utf-8"});
    fileSaver.saveAs(blob, "main.c");
  }

  return (
    <div className="utilitySubPanel">
      <h3>Export</h3>
      <button onClick={handleDownloadCodeBtn}><p>Download code</p></button>
    </div>
  )
}