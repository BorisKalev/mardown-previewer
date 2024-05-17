import './App.css'
import ReactMarkdown from 'react-markdown'
import React,{useState, createContext} from "react";
import $ from 'jquery';

function App() {
  // defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
  const defaultMarkdown = `
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... **_both!_**
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  ![React Logo w/ Text](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)
  
  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.
  `;



  const [markdownText, setMarkDownText] = useState(defaultMarkdown);
  let [checkIfBigOrSmall, setCheckIfBigOrSmall] = useState(false);

  function handleOnClick(){
    setCheckIfBigOrSmall(!checkIfBigOrSmall);
    $("#button1 i").toggleClass('bi-fullscreen bi-fullscreen-exit');
    document.getElementById("preview-div").style.display = checkIfBigOrSmall ? "block" : "none";
    document.getElementById("editor").style.height = checkIfBigOrSmall ? "250px" : "800px";
  }
  function handleOnClickPreview(){
    setCheckIfBigOrSmall(!checkIfBigOrSmall);
    $("#button2 i").toggleClass('bi-fullscreen bi-fullscreen-exit');
    document.getElementById("top-div").style.display = checkIfBigOrSmall ? "block" : "none";
  }

  return (
    <>
     <div id="top-div">
      <header id="header1">
        <i id="pencil" className="bi bi-pencil-square"></i>
        <h5>Editor</h5>
        <button id="button1" className="button1" onClick={handleOnClick}><i className="bi bi-fullscreen"></i></button>
      </header>
      <textarea id="editor" name="" cols="30" rows="10" value={markdownText} onChange={(e) => setMarkDownText(e.target.value)}> </textarea>
    </div>
    
     <div id="preview-div">
      <header id="header2">
        <h5>Previewer</h5>
        <button id="button2" onClick={handleOnClickPreview}><i className="bi bi-fullscreen"></i></button>
      </header>
      <div id="preview"><ReactMarkdown>{markdownText}</ReactMarkdown></div>
    </div>
    <link rel="stylesheet" href="markdown-previewer.css" />
    </>
  )
}

export default App
