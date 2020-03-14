import React from "react";
import {
  Segment,
  Input,
  Button,
  Header,
  Label,
  Container
} from "semantic-ui-react";
import Tooltip from "../component/Tooltip";
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
            {isEditable ? (
              <Container>
                <Label color="blue" ribbon>
                  {topicSubtopicIndex ? "SUBTOPIC" : "TOPIC"}
                </Label>
                <Input
                  as="h1"
                  size={topicSubtopicIndex ? "big" : "massive"}
                  fluid
                  value={name}
                  font-weight="bold"
                  onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
                ></Input>
              </Container>
            ) : (
              <Header size={topicSubtopicIndex ? "medium" : "large"}>
                {name}
              </Header>
            )}
            {isEditable && (
              <Tooltip text="Add Subtopic">
                <Button
                  onClick={() => addSubtopic(topicSubtopicIndex)}
                  icon="plus circle"
                />
              </Tooltip>
            )}
            {showDelete && (
              <Tooltip text="Delete Subtopic">
                <Button
                  onClick={() => deleteSubtopic(topicSubtopicIndex)}
                  icon="trash"
                />
              </Tooltip>
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
