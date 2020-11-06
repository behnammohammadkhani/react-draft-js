import React, {useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({value, onChange}) => {
 

  return (
    <div>
      <Editor editorState={value} onEditorStateChange={onChange} />
       
    </div>
  );
};

export default TextEditor;
