import React from "react";
import { Container, Menu } from "semantic-ui-react";
import TooltipBtn from "./TooltipBtn";

const Header = ({ showDashboard, toggleEditable, isEditable, saveDraft }) => {
  return (
    <Container>
      <Menu borderless inverted fixed="top" color="blue">
        <Menu.Item>
          <TooltipBtn
            ttText="Back to Articles"
            icon="arrow alternate circle left"
            onClick={showDashboard}
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
            ttText="Preview Mode"
            icon="eye"
            toggle={true}
            active={!isEditable}
            onClick={() => toggleEditable(false)}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <TooltipBtn
            ttText="Publish - Coming Soon!"
            ttPosition="bottom right"
            icon="file alternate"
          />
        </Menu.Item>
        <Menu.Item>
          <TooltipBtn
            ttText="Save Draft"
            ttPosition="bottom right"
            icon="save"
            onClick={saveDraft}
          />
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Header;
