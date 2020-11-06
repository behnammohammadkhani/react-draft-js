import React, { useState, useEffect } from "react";
import Description from "./Description";
import {
  convertFromHTML,
  convertToRaw,
  EditorState,
  ContentState,
  convertFromRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from "draft-js-export-html";

const CustomTextEditor = () => {
  //-> state hooks
  const [form, setForm] = useState({
    type: true,
    isUpdate: false,
    description: EditorState.createEmpty(),
  });

  const { description, type, isUpdate } = form;
  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log("localStorage", localStorage.getItem("data"));
      const data = localStorage.getItem("data");

      const convertDataToEditorFormat = ContentState.createFromBlockArray(
        convertFromHTML("data")
      );
      // localStorage.removeItem("data");

      const x = EditorState.createWithContent(convertDataToEditorFormat);

      console.log("object", x);
      setForm((prevState) => ({
        ...prevState,
        description: x,
      }));
    }
  }, []);
  //-> handleChange : Function
  const handleChange = (editorState) => {
    setForm((prevState) => ({
      ...prevState,
      description: editorState,
    }));
  };

  const convertEditorStateToHtml = (state) => {
    const data = draftToHtml(convertToRaw(state.getCurrentContent()));

    console.log("convertEditorStateToHtml", data);
    localStorage.setItem("data", JSON.stringify(data));

  };
  //-> handleFormSubmit : Function
  const handleFormSubmit = (e) => {
    e.preventDefault();

    convertEditorStateToHtml(description);

    setForm((prevState) => ({
      ...prevState,
      isUpdate: true,
    }));
  };
    const handleTypeClick = () => {
      setForm((prevState) => ({
        ...prevState,
        type: !type,
        description: EditorState.createEmpty(),
      }));
    };

   //  useEffect(() => {
   //    setForm((prevState) => ({
   //      ...prevState,
   //      description: EditorState.createEmpty(),
   //    }));
   //  }, [type]);
   //  console.log("DESCRIPTION",convertEditorStateToHtml(description));
  return (
    <form onSubmit={(e) => {handleFormSubmit(e)}}>
      {isUpdate ? (
        <Description value={description} onChange={handleChange} />
      ) : (
        <Description value={description} onChange={handleChange} />
      )}
      <button type="submit">submit</button>
      <button onClick={() => {handleTypeClick()}}>Change state of Type</button>
    </form>
  );
};

export default CustomTextEditor;
