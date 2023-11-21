import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { useState } from "react";
import { toggleBold, toggleItalics, toggleUnderline } from "../store/slice";
const Header = () => {
  const dispatch = useDispatch();
  const { bold, italic, underline } = useSelector((state) => state.format);

  const boldSelected = bold ? "selected" : "";
  const italicSelected = italic ? "selected" : "";
  const underlineSelected = underline ? "selected" : "";

  return (
    <div className="header-toolbar">
      <button className={`style-undo-button`}>&#x21a9;</button>
      <button className={`style-redo-button`}>&#x21aa;</button>
      <button
        className={`btn-bold ${boldSelected}`}
        onClick={() => dispatch(toggleBold())}
      >
        B
      </button>
      <button
        className={`btn-italic ${italicSelected}`}
        onClick={() => dispatch(toggleItalics())}
      >
        I
      </button>
      <button
        className={`btn-underline ${underlineSelected}`}
        onClick={() => dispatch(toggleUnderline())}
      >
        U
      </button>
    </div>
  );
};

export default Header;
