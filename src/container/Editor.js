import React from "react";
import { Container } from "semantic-ui-react";
import Article from "../component/Article";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.articleId,
      topicSubtopicArray: [
        {
          name: "I am a Topic",
          blockArray: ["Block text 1"]
        },
        {
          name: "I am a SubTopic",
          blockArray: ["Block text 1", "Block text 2"]
        }
      ]
    };
  }

  updateArticleState = newTopicSubtopicArray => {
    this.setState({ topicSubtopicArray: newTopicSubtopicArray });
  };

  render = () => {
    return (
      <Container>
        <Article
          topicSubtopicArray={this.state.topicSubtopicArray}
          updateArticleState={this.updateArticleState}
        />
      </Container>
    );
  };
}

export default Editor;
