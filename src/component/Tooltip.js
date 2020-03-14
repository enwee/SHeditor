import React from "react";
import { Popup } from "semantic-ui-react";

const Tooltip = ({ text, position, children }) => {
  return (
    <Popup
      content={text}
      inverted
      size="tiny"
      position={position || "bottom left"}
      trigger={children}
    />
  );
};

export default Tooltip;
