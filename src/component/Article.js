import React from "react";
import { Segment, Input, Header, Label, Container } from "semantic-ui-react";
import ButtonsBar from "./ButtonsBar";
import Blocks from "../component/Blocks";
import { v4 as uuidv4 } from "uuid";

const Article = ({ isEditable, topicArray, updateArticleState }) => {
  const nameChange = (value, index) => {
    topicArray[index].name = value;
    updateArticleState(topicArray);
  };

  const addTopic = index => {
    topicArray.splice(index + 1, 0, {
      uuid: uuidv4(),
      name: "",
      blockArray: [{ ckString: "", uuid: uuidv4() }]
    });
    updateArticleState(topicArray);
  };

  const deleteTopic = index => {
    topicArray.splice(index, 1);
    updateArticleState(topicArray);
  };

  const topicUp = index => {
    [topicArray[index - 1], topicArray[index]] = 
    [topicArray[index], topicArray[index - 1]]; //prettier-ignore
    updateArticleState(topicArray);
  };

  const topicDown = index => {
    [topicArray[index], topicArray[index + 1]] = 
    [topicArray[index + 1], topicArray[index]]; //prettier-ignore
    updateArticleState(topicArray);
  };

  const jsxArray = topicArray.map((topic, topicIndex) => {
    const { name, uuid, blockArray } = topic;
    return (
      <Segment key={uuid}>
        <Segment>
          {isEditable ? (
            <Container>
              <Label
                color="blue"
                ribbon
                size={topicIndex ? "large" : "big"}
                content={topicIndex ? "SUBTOPIC" : "TOPIC"}
              />
              <Input
                size={topicIndex ? "big" : "massive"}
                fluid
                value={name}
                onChange={e => nameChange(e.target.value, topicIndex)}
              />
              {/* <Input
                  value={name}
                  list="catergory"
                  fluid
                  placeholder="Choose or Enter new Cat"
                  onChange={e => nameChange(e.target.value, topicIndex)}
                />
                <datalist id="catergory">
                  {["English", "Chinese", "Dutch"].map(x => (
                    <option value={x} />
                  ))}
                </datalist> */}
            </Container>
          ) : (
            <Header size={topicIndex ? "medium" : "large"}>{name}</Header>
          )}
          <ButtonsBar
            isEditable={isEditable}
            type="Subtopic"
            index={topicIndex}
            lastIndex={topicArray.length - 1}
            add={addTopic}
            remove={deleteTopic}
            moveUp={topicUp}
            moveDown={topicDown}
          />
        </Segment>
        <Blocks
          isEditable={isEditable}
          topicArray={topicArray}
          blockArray={blockArray}
          updateArticleState={updateArticleState}
        />
      </Segment>
    );
  });
  return jsxArray;
};

export default Article;
