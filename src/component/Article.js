import React from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import Blocks from "../component/Blocks";

const Article = ({ isEditable, topicSubtopicArray, updateArticleState }) => {
  const jsxArray = topicSubtopicArray.map(
    (topicSubtopic, topicSubtopicIndex) => {
      const { name, blockArray } = topicSubtopic;
      return (
        <Segment key={topicSubtopicIndex}>
          <Segment>
            <Input
              size={topicSubtopicIndex ? "big" : "massive"}
              label={topicSubtopicIndex ? "SUBTOPIC" : "TOPIC"}
              labelPosition="right"
              fluid="true"
              value={name}
              disabled={!isEditable}
              onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
            ></Input>
            {isEditable && topicSubtopicIndex ? (
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
          </Segment>
          <Blocks
            isEditable={isEditable}
            topicSubtopicArray={topicSubtopicArray}
            topicSubtopicIndex={topicSubtopicIndex}
            blockArray={blockArray}
            updateArticleState={updateArticleState}
          />
        </Segment>
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
