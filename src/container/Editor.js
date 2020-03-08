import React from "react";
import { Container, Button } from "semantic-ui-react";
import Article from "../component/Article";

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
            "Block Text that you can edit",
            '<figure class="media"><oembed url="https://snaphunt-videos.s3-ap-southeast-1.amazonaws.com/assets/for-employers-page/snaphunt-for-employers-page-descriptive-video.mp4"></oembed></figure>',
            '<p>Hello how are you?</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=nSGxQEpg07Q"></oembed></figure>'
          ]
        }
      ]
    };
  }

  updateArticleState = newTopicSubtopicArray => {
    this.setState({ topicSubtopicArray: newTopicSubtopicArray });
  };

  toggleEditable = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  render = () => {
    return (
      <Container>
        <Button
          onClick={() => this.toggleEditable()}
          icon={this.state.isEditable ? "tv" : "edit"}
          size="massive"
        />
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
