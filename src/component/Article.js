import React from "react";
import { Container, Input } from "semantic-ui-react";
import Blocks from "../component/Blocks";

const Article = ({ topicSubtopicArray, updateArticleState }) => {
  const jsxArray = topicSubtopicArray.map(
    (topicSubtopic, topicSubtopicIndex) => {
      const { name, blockArray } = topicSubtopic;
      return (
        <Container key={topicSubtopicIndex}>
          <Input
            size="large"
            value={name}
            onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
          ></Input>
          <Blocks
            topicSubtopicArray={topicSubtopicArray}
            blockArray={blockArray}
            updateArticleState={updateArticleState}
          />
        </Container>
      );
    }
  );

  const nameChange = (value, index) => {
    topicSubtopicArray[index].name = value;
    updateArticleState(topicSubtopicArray);
  };

  return jsxArray;
};

export default Article;
