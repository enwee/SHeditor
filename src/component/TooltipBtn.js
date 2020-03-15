import React from "react";
import { Popup, Button } from "semantic-ui-react";

const TooltipBtn = ({
  ttText,
  ttPosition,
  icon,
  onClick,
  aria,
  toggle,
  active,
  disabled
}) => {
  return (
    <Popup
      content={ttText}
      inverted
      size="tiny"
      position={ttPosition || "bottom left"}
      trigger={
        <Button
          icon={icon}
          onClick={onClick}
          aria-label={aria}
          toggle={toggle}
          active={active}
          disabled={disabled}
        />
      }
    />
  );
};

export default TooltipBtn;
