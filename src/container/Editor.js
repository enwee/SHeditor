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
          blockArray: [
            '<figure class="media"><oembed url="https://snaphunt-videos.s3-ap-southeast-1.amazonaws.com/assets/for-employers-page/snaphunt-for-employers-page-descriptive-video.mp4"></oembed></figure>',
            '<figure class="media"><oembed url="http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v"></oembed></figure>'
          ]
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
