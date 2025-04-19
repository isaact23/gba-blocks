import React from 'react';
import './CodeOutput.css';
import {useCodeOutput} from 'hooks/useCodeOutput';

export function CodeOutput() {
  const {codeOutput} = useCodeOutput();

  return (
    <div className="codeOutput">
      <code>{codeOutput}</code>
    </div>
  )
}