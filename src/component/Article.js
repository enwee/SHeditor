import React from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import Blocks from "../component/Blocks";
import { v4 as uuidv4 } from "uuid";

const Article = ({ isEditable, topicSubtopicArray, updateArticleState }) => {
  const jsxArray = topicSubtopicArray.map(
    (topicSubtopic, topicSubtopicIndex) => {
      const showDelete = Boolean(isEditable && topicSubtopicIndex);
      const { name, uuid, blockArray } = topicSubtopic;
      return (
        <Segment key={uuid}>
          <Segment>
            <Input
              size={topicSubtopicIndex ? "big" : "massive"}
              label={topicSubtopicIndex ? "SUBTOPIC" : "TOPIC"}
              labelPosition="right"
              fluid
              value={name}
              disabled={!isEditable}
              onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
            ></Input>
            {isEditable && (
              <Button
                onClick={() => addSubtopic(topicSubtopicIndex)}
                icon="plus circle"
              />
            )}
            {showDelete && (
              <Button
                onClick={() => deleteSubtopic(topicSubtopicIndex)}
                icon="trash"
              />
            )}
          </Segment>
          <Blocks
            isEditable={isEditable}
            topicSubtopicArray={topicSubtopicArray}
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
      uuid: uuidv4(),
      name: "",
      blockArray: [{ ckString: "", uuid: uuidv4() }]
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
