import React, { useState, useEffect } from "react";
import {
  convertFromHTML,
  convertToRaw,
  EditorState,
  ContentState,
} from "draft-js";
import TextEditor from "./TextEditor";
import draftToHtml from "draftjs-to-html";

const Description = ({value,onChange}) => {
  // const [description, setDescription] = useState(() =>
  //   EditorState.createEmpty()
  // );
  
 

  // const handleClearData = () => {
  //   setForm((prevState) => ({
  //     ...prevState,
  //     type: !type,
  //   }));
  // };
  
  
  // useEffect(() => {
  //   setForm((prevState) => ({
  //     ...prevState,
  //     description: EditorState.createEmpty(),
  //   }));
  // }, [type]);
  //---------------------------------------------/
  // console.log("from editor",description);
  
  // const data = draftToHtml(convertToRaw(description.getCurrentContent()));
  // console.log("to html", data);

  // const convertDataToEditorFormat=ContentState.createFromBlockArray(
  //       convertFromHTML(data),
      
  // )
  // const x=EditorState.createWithContent(convertDataToEditorFormat)
  // console.log('from html to editor',x);
  return (
    <>
      
        <TextEditor onChange={onChange} value={value} />
        
    </>
  );
};

export default Description;
