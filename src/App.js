import React, { useState } from "react";
// import axios from 'axios';
import './App.css';
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";
import SubmitButton from "./components/SubmitButton";

const App = () => {
  const[code, setCode] = useState('');
  const [language, setLanguage] = useState('java');
  const handleSubmit = () => {
      const apiURL = ' ';
  }

  return (
      <div id="root">
          <h1>Code execute app</h1>
          <LanguageSelector setLanguage={setLanguage}/>
          <CodeEditor code={code} setCode={setCode}/>
          <SubmitButton onSubmit={handleSubmit}/>
      </div>
  )
}

export default App;