import React from "react";
import { Container, Button } from "semantic-ui-react";
import Article from "../component/Article";
import testLongString from "../testData/testLongString";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.articleId,
      isEditable: true,
      topicSubtopicArray: [
        {
          name: "JumpStart Stack",
          blockArray: [
            "<ul><li>MongoDB</li><li>Express JS</li><li>React</li><li>Node JS</li></ul>"
          ]
        },
        {
          name: "AWS/mp4 and Youtube Video",
          blockArray: [
            testLongString,
            "Block Text that you can edit",
            '<figure class="media"><oembed url="https://snaphunt-videos.s3-ap-southeast-1.amazonaws.com/assets/for-employers-page/snaphunt-for-employers-page-descriptive-video.mp4"></oembed></figure>'
          ]
        }
      ]
    };
  }

  updateArticleState = newTopicSubtopicArray => {
    this.setState({ topicSubtopicArray: newTopicSubtopicArray });
  };

  toggleEditable = bool => {
    this.setState({ isEditable: bool });
  };

  render = () => {
    return (
      <Container>
        <Button
          onClick={() =>
            console.log(this.state.topicSubtopicArray[0].blockArray[0])
          }
        >
          Console log first block
        </Button>
        <Button.Group size="massive">
          <Button onClick={() => this.toggleEditable(true)}>Edit</Button>
          <Button.Or />
          <Button onClick={() => this.toggleEditable(false)}>Read</Button>
        </Button.Group>
        <Article
          isEditable={this.state.isEditable}
          topicSubtopicArray={this.state.topicSubtopicArray}
          updateArticleState={this.updateArticleState}
        />
      </Container>
    );
  };
}

export default Editor;
