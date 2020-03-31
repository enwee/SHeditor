import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import backEndUrl from "../constants/urls";
import { Container, Divider, Dimmer, Loader } from "semantic-ui-react";
import Article from "../component/Article";
import Header from "../component/Header";
import WarnModal from "../component/WarnModal";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      isLoading: true,
      changeMade: false,
      warnUnsaved: false,
      warnPayload: false,
      isSaving: false,
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

  updateArticle = newtopicArray => {
    this.setState({ topicArray: newtopicArray, changeMade: true });
  };

  toggleEditable = isEditable => {
    this.setState({ isEditable });
  };

  warnUnsaved = warnUnsaved => {
    this.setState({ warnUnsaved });
  };

  warnPayload = warnPayload => {
    this.setState({ warnPayload });
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
    this.setState({ isSaving: true });
    axios
      .put(`${backEndUrl}/drafts/${this.props.articleId}`, article)
      .then(() => {
        this.setState({ changeMade: false });
      })
      .catch(error => {
        if (error.response.status === 413) {
          this.setState({ warnPayload: true });
        }
        console.log("saveDraft>>>", error);
      })
      .finally(() => this.setState({ isSaving: false }));
  };

  componentDidMount = () => {
    this.getArticle();
  };

  render = () => {
    const { showDashboard } = this.props;
    const {
      isEditable,
      isLoading,
      changeMade,
      isSaving,
      warnUnsaved,
      warnPayload,
      topicArray
    } = this.state;
    return (
      <Container>
        <Header
          showDashboard={showDashboard}
          toggleEditable={this.toggleEditable}
          isEditable={isEditable}
          changeMade={changeMade}
          isSaving={isSaving}
          warnUnsaved={this.warnUnsaved}
          saveDraft={this.saveDraft}
        />
        <Divider hidden section />
        <Dimmer active={isLoading}>
          <Loader content="Loading" />
        </Dimmer>
        <Article
          isEditable={isEditable}
          topicArray={topicArray}
          updateArticle={this.updateArticle}
        />
        <Divider hidden section />
        <WarnModal
          open={warnUnsaved}
          header="Unsaved Changes"
          content="Changes will be lost. Are you Sure?"
          clickOk={showDashboard}
          clickCancel={() => this.warnUnsaved(false)}
        />
        <WarnModal
          open={warnPayload}
          header="Cannot Save Article"
          content="The Article has exceeded data payload size limit. It is likely image(s) used have large file size. Use image(s) of smaller file size."
          clickOk={() => this.warnPayload(false)}
        />
      </Container>
    );
  };
}

export default Editor;
