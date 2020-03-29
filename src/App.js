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
    this.setState({ showEditor: true, articleId: uuidv4() });
  };

  editArticle = id => {
    this.setState({ showEditor: true, articleId: id });
  };

  showDashboard = () => {
    this.setState({ showEditor: false });
  };

  render = () => {
    return (
      <Container>
        {this.state.showEditor ? (
          <Editor
            showDashboard={this.showDashboard}
            articleId={this.state.articleId}
          />
        ) : (
          <Dashboard
            createNewArticle={this.createNewArticle}
            editArticle={this.editArticle}
          />
        )}
      </Container>
    );
  };
}

export default App;
