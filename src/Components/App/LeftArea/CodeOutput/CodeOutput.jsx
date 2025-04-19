import React from 'react';
import './CodeOutput.css';

export function CodeOutput(props) {

  return (
    <div className="codeOutput">
      <pre><code>{props.code}</code></pre>
    </div>
  )
}
