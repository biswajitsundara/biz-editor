import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [isBold, setIsBold] = useState(false);
  const [boldSelected, setBoldSelected] = useState(null);

  const handleBoldStyle = () => {
    setIsBold(!isBold);
    if(boldSelected === 'selected')
    setBoldSelected(null)
    else
    setBoldSelected('selected')
  };

  return (
    <div className="header-toolbar">
      <button className={`style-bold-button ${boldSelected}`} onClick={handleBoldStyle}>
        B
      </button>
      <button className={`style-italics-button`}>I</button>
      <button className={`style-underline-button`}>U</button>
      <button>Undo</button>
    </div>
  );
};

export default Header;
