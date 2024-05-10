import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const CodeEditor = ( {code, setCode} ) => {
    // const[code, setCode] = useState('');
    // function handleChange(newValue){
    //     setCode(newValue)
    // }
    return (
      <AceEditor
          mode="java"
          theme="github"
          onChange={setCode}
          value={code}
          editorProps={ {$blockScrolling: true} }
          width="100%"
          height="400px"
      />

    );
}

export default CodeEditor();

