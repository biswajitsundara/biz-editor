import { useRef } from "react";
import "./body.css";
import { useDispatch, useSelector } from "react-redux";
import { resetFormattingFlag } from "../store/slice";

const Body = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const { bold, italic, underline, formattingApplied } = useSelector(
    (state) => state.format
  );

  const applyBoldStyle = () => {
    if (bold) {
      const contentRef = editorRef.current.innerHTML;
      const updatedContent = `<strong>${contentRef}</strong>`;
      editorRef.current.innerHTML = updatedContent;
    } else {
        const contentRef = editorRef.current.innerHTML;
        const outputString = contentRef.replace(/<strong>|<\/strong>/g, '');
      editorRef.current.innerHTML = outputString;
    }
    dispatch(resetFormattingFlag());
  };

  const applyItalicsStyle = () => {
    if (italic) {
      const contentRef = editorRef.current.innerHTML;
      const updatedContent = `<i>${contentRef}</i>`;
      editorRef.current.innerHTML = updatedContent;
    } else {
      const contentRef = editorRef.current.innerHTML;
      const outputString = contentRef.replace(/<i>|<\/i>/g, '');
      editorRef.current.innerHTML = outputString;
    }
    dispatch(resetFormattingFlag());
  };

  const applyUnderlineStyle = () => {
    if (underline) {
      const contentRef = editorRef.current.innerHTML;
      const updatedContent = `<u>${contentRef}</u>`;
      editorRef.current.innerHTML = updatedContent;

    } else {
      const contentRef = editorRef.current.innerHTML;
      const outputString = contentRef.replace(/<u>|<\/u>/g, '');
      editorRef.current.innerHTML = outputString;
    }
    dispatch(resetFormattingFlag());
  };

  if (editorRef.current) {
    switch(formattingApplied){
        case 'bold': applyBoldStyle();
                     break;
        case 'italics': applyItalicsStyle();
                       break;
        case 'underline': applyUnderlineStyle();
                          break;                
    }
  }

  return (
    <div className="editor-body" contenteditable="true" ref={editorRef}>
      Hello India & World
    </div>
  );
};

export default Body;
