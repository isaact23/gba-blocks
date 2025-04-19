import React from 'react';
import './CodeOutput.css';
import {useCodeOutput} from 'hooks/useCodeOutput';

export function CodeOutput() {
  const {codeOutput} = useCodeOutput();

  return (
    <div className="codeOutput">
      <pre><code>{codeOutput}</code></pre>
    </div>
  )
}
