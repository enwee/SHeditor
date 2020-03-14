import React from "react";
import { Button, Container, Header } from "semantic-ui-react";
import Tooltip from "../component/Tooltip";

class Dashboard extends React.Component {
  render = () => {
    const { createNewArticle } = this.props;
    return (
      <Container textAlign="center">
        <Header as="h1">Dashboard</Header>
        <Tooltip text="Create New Article">
          <Button
            onClick={createNewArticle}
            icon="plus circle"
            aria-label="Create New Article"
          />
        </Tooltip>
      </Container>
    );
  };
}

export default Dashboard;
