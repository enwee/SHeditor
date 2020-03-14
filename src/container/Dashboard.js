import React from "react";
import { Container, Header } from "semantic-ui-react";
import TooltipBtn from "../component/TooltipBtn";

class Dashboard extends React.Component {
  render = () => {
    const { createNewArticle } = this.props;
    return (
      <Container textAlign="center">
        <Header as="h1">Dashboard</Header>
        <TooltipBtn
          ttText="Create New Article"
          icon="plus circle"
          onClick={createNewArticle}
          aria-label="Create New Article"
        />
      </Container>
    );
  };
}

export default Dashboard;
