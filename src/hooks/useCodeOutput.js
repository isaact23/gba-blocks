import {useState} from "react";

export function useCodeOutput() {
  const [codeOutput, setCodeOutput] = useState("");
  return {codeOutput, setCodeOutput};
}
