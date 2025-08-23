import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

const Editor = ({ language, value, onChange }) => {
  const extensions = {
    html: html(),
    css: css(),
    javascript: javascript()
  };

  return (
    <div style={{ margin: '10px', fontSize:"14px"}} >
      <CodeMirror
        value={value}
        height="300px"
        width='600px'
        theme="light"
        extensions={[extensions[language]]}
        onChange={(val) => onChange(val)}
      />
    </div>
  );
};

export default Editor;
