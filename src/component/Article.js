import React from "react";
import { Container, Input, Button } from "semantic-ui-react";
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
          {topicSubtopicIndex ? (
            <span>
              <Button
                onClick={() => addSubtopic(topicSubtopicIndex)}
                icon="plus circle"
              />
              <Button
                onClick={() => deleteSubtopic(topicSubtopicIndex)}
                icon="trash"
              />
            </span>
          ) : (
            ""
          )}
          <Blocks
            topicSubtopicArray={topicSubtopicArray}
            topicSubtopicIndex={topicSubtopicIndex}
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

  const addSubtopic = index => {
    topicSubtopicArray.splice(index + 1, 0, {
      name: "",
      blockArray: [""]
    });
    updateArticleState(topicSubtopicArray);
  };

  const deleteSubtopic = index => {
    topicSubtopicArray.splice(index, 1);
    updateArticleState(topicSubtopicArray);
  };

  return jsxArray;
};

export default Article;
