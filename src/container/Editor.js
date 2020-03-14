import React from "react";
import { Container } from "semantic-ui-react";
import Article from "../component/Article";
import Header from "../component/Header";
import testLongString from "../testData/testLongString";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.articleId,
      isEditable: true,
      topicSubtopicArray: [
        {
          uuid: "60b82fad-c009-41a8-b2f7-dc10c33f13af",
          name: "JumpStart Stack",
          blockArray: [
            {
              ckString:
                "<ul><li>MongoDB</li><li>Express JS</li><li>React</li><li>Node JS</li></ul>",
              uuid: "c70886af-dae9-4772-acde-5abdc2e8d6f0"
            }
          ]
        },
        {
          uuid: "724265fe-a5e3-4877-a7ee-c287dd3c40a6",
          name: "Image/text and AWS/mp4",
          blockArray: [
            {
              ckString: testLongString,
              uuid: "b352e15d-7f67-4684-8522-ea7aafff7827"
            },
            {
              ckString: "Block Text that you can edit",
              uuid: "3b68fd6e-5202-4390-a4d9-1ea1d8a832e1"
            },
            {
              ckString:
                '<figure class="media"><oembed url="https://snaphunt-videos.s3-ap-southeast-1.amazonaws.com/assets/for-employers-page/snaphunt-for-employers-page-descriptive-video.mp4"></oembed></figure>',
              uuid: "72018440-3d87-4957-b9ad-1dc483c2f7ce"
            }
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
        <Header
          showEditor={this.props.createNewArticle}
          toggleEditable={this.toggleEditable}
          isEditable={this.state.isEditable}
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
