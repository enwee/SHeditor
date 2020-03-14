import React from "react";
import { Container, Menu, Button, Divider } from "semantic-ui-react";
import Tooltip from "./Tooltip";

const Header = ({ showEditor, toggleEditable, isEditable }) => {
  return (
    <Container>
      <Menu borderless inverted fixed="top" color="blue">
        <Menu.Item>
          <Tooltip text="Back to Dashboard">
            <Button icon="arrow alternate circle left" onClick={showEditor} />
          </Tooltip>
        </Menu.Item>
        <Menu.Item>
          <Tooltip text="Edit Mode">
            <Button
              icon="edit"
              toggle
              active={isEditable}
              onClick={() => toggleEditable(true)}
            />
          </Tooltip>
        </Menu.Item>
        <Menu.Item>
          <Tooltip text="Preview">
            <Button
              icon="eye"
              toggle
              active={!isEditable}
              onClick={() => toggleEditable(false)}
            />
          </Tooltip>
        </Menu.Item>
        <Menu.Item position="right">
          <Tooltip text="Save Draft" position="bottom right">
            <Button icon="save" />
          </Tooltip>
        </Menu.Item>
      </Menu>
      <Divider hidden section />
    </Container>
  );
};

export default Header;
