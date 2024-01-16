import React from "react";
import CustomMenu from "./CustomMenu";



const Menu = ({ outerRef }) => {
  const { xPos, yPos, menu, row } = CustomMenu(outerRef);

  if (menu) {
    return (
      <ul className="menu" style={{ top: yPos, left: xPos }}>
        <li>Item1, Row: {row}</li>
        <li>Item2 Row {row}</li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
