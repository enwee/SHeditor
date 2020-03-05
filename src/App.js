import React from "react";
import { v4 as uuidv4 } from "uuid";
import Editor from "./container/Editor";
import Dashboard from "./container/Dashboard";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      articleId: ""
    };
  }

  createNewArticle = () => {
    this.setState({ showEditor: !this.state.showEditor, articleId: uuidv4() });
  };

  render = () => {
    return (
      <Container>
        {this.state.showEditor ? (
          <Editor articleId={this.state.articleId} />
        ) : (
          <Dashboard createNewArticle={this.createNewArticle} />
        )}
      </Container>
    );
  };
}

export default App;
