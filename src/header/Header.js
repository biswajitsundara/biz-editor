import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [isBold, setIsBold] = useState(false);

  const handleBoldStyle = () => {
    setIsBold(!isBold);
    console.log(isBold);
  };

  return (
    <div className="header-toolbar">
      <button className="style-bold-button" onClick={handleBoldStyle}>
        B
      </button>
      <button className="style-italics-button">I</button>
      <button className="style-underline-button">U</button>
    </div>
  );
};

export default Header;
