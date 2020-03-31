import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import backEndUrl from "../constants/urls";
import { Container, Divider, Dimmer, Loader } from "semantic-ui-react";
import Article from "../component/Article";
import Header from "../component/Header";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      isLoading: true,
      topicArray: [
        {
          uuid: uuidv4(),
          name: "",
          blockArray: [
            {
              ckString: "",
              uuid: uuidv4()
            }
          ]
        }
      ]
    };
  }

  updateArticleState = newtopicArray => {
    this.setState({ topicArray: newtopicArray });
  };

  toggleEditable = isEditable => {
    this.setState({ isEditable });
  };

  getArticle = () => {
    axios
      .get(`${backEndUrl}/drafts/${this.props.articleId}`)
      .then(({ data }) => {
        if (data) this.setState({ topicArray: data.topicArray });
      })
      .catch(error => {
        console.log("getArticle>>>", error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  saveDraft = () => {
    const article = {
      uuid: this.props.articleId,
      title: this.state.topicArray[0].name,
      topicArray: this.state.topicArray
    };
    axios
      .put(`${backEndUrl}/drafts/${this.props.articleId}`, article)
      .then(({ data }) => {
        //this.setState(() => ({ articleList: data }));
      })
      .catch(error => {
        console.log("saveDraft>>>", error);
      })
      .finally(() => {}); // always executed
  };

  componentDidMount = () => {
    this.getArticle();
  };

  render = () => {
    return (
      <Container>
        <Header
          showDashboard={this.props.showDashboard}
          toggleEditable={this.toggleEditable}
          isEditable={this.state.isEditable}
          saveDraft={this.saveDraft}
        />
        <Divider hidden section />
        <Dimmer active={this.state.isLoading}>
          <Loader content="Loading" />
        </Dimmer>
        <Article
          isEditable={this.state.isEditable}
          topicArray={this.state.topicArray}
          updateArticleState={this.updateArticleState}
        />
        <Divider hidden section />
      </Container>
    );
  };
}

export default Editor;
