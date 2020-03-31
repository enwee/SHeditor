import React from "react";
import axios from "axios";
import { Container, Header, Button, Segment, Loader } from "semantic-ui-react";
import TooltipBtn from "../component/TooltipBtn";
import backEndUrl from "../constants/urls";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [{ title: "Loading" }],
      isLoading: true
    };
  }

  getArticleList = () => {
    axios(`${backEndUrl}/drafts`)
      .then(({ data }) => {
        this.setState(() => ({ articleList: data, isLoading: false }));
      })
      .catch(error => {
        console.log("getArticleList>>>", error);
      })
      .finally(() => {}); // always executed
  };

  componentDidMount = () => {
    this.getArticleList();
  };

  render = () => {
    const { createNewArticle, editArticle } = this.props;
    const { articleList, isLoading } = this.state;
    return (
      <Container textAlign="center">
        <Header as="h1">Articles</Header>
        <TooltipBtn
          ttText="Create New Article"
          icon="plus circle"
          onClick={createNewArticle}
          aria-label="Create New Article"
        />
        {articleList.map((article, index) => (
          <Segment key={index}>
            <Loader active={isLoading} />
            <Button
              content={article.title}
              disabled={isLoading}
              onClick={() => editArticle(article.uuid)}
            />
          </Segment>
        ))}
      </Container>
    );
  };
}

export default Dashboard;
