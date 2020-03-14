import React from "react";
import { Segment, Input, Header, Label, Container } from "semantic-ui-react";
import TooltipBtn from "../component/TooltipBtn";
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
                  size={topicSubtopicIndex ? "big" : "massive"}
                  fluid
                  value={name}
                  onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
                />
                {/* <Input
                  value={name}
                  list="catergory"
                  fluid
                  placeholder="Choose or Enter new"
                  onChange={e => nameChange(e.target.value, topicSubtopicIndex)}
                />
                <datalist id="catergory">
                  {["English", "Chinese", "Dutch"].map(x => (
                    <option value={x} />
                  ))}
                </datalist> */}
              </Container>
            ) : (
              <Header size={topicSubtopicIndex ? "medium" : "large"}>
                {name}
              </Header>
            )}
            {isEditable && (
              <TooltipBtn
                ttText="Add Subtopic"
                icon="plus circle"
                onClick={() => addSubtopic(topicSubtopicIndex)}
              />
            )}
            {showDelete && (
              <TooltipBtn
                ttText="Delete Subtopic"
                icon="trash"
                onClick={() => deleteSubtopic(topicSubtopicIndex)}
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
