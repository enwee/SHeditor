import React from "react";
import { Container, Menu, Divider } from "semantic-ui-react";
import TooltipBtn from "./TooltipBtn";

const Header = ({ showEditor, toggleEditable, isEditable }) => {
  return (
    <Container>
      <Menu borderless inverted fixed="top" color="blue">
        <Menu.Item>
          <TooltipBtn
            ttText="Back to Dashboard"
            icon="arrow alternate circle left"
            onClick={showEditor}
          />
        </Menu.Item>
        <Menu.Item>
          <TooltipBtn
            ttText="Edit Mode"
            icon="edit"
            toggle={true}
            active={isEditable}
            onClick={() => toggleEditable(true)}
          />
        </Menu.Item>
        <Menu.Item>
          <TooltipBtn
            ttText="Preview"
            icon="eye"
            toggle={true}
            active={!isEditable}
            onClick={() => toggleEditable(false)}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <TooltipBtn ttText="Publish" icon="file alternate" />
        </Menu.Item>
        <Menu.Item>
          <TooltipBtn
            ttText="Save Draft"
            ttPosition="bottom right"
            icon="save"
          />
        </Menu.Item>
      </Menu>
      <Divider hidden section />
    </Container>
  );
};

export default Header;
