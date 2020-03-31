import React from "react";
import { Segment, Input, Header, Label, Container } from "semantic-ui-react";
import ButtonsBar from "./ButtonsBar";
import Block from "./Block";
import { v4 as uuidv4 } from "uuid";

const Article = ({ isEditable, topicArray, updateArticle }) => {
  const nameChange = (value, index) => {
    topicArray[index].name = value;
    updateArticle(topicArray);
  };

  const addTopic = index => {
    topicArray.splice(index + 1, 0, {
      uuid: uuidv4(),
      name: "",
      blockArray: [{ ckString: "", uuid: uuidv4() }]
    });
    updateArticle(topicArray);
  };

  const deleteTopic = index => {
    topicArray.splice(index, 1);
    updateArticle(topicArray);
  };

  const topicUp = index => {
    [topicArray[index - 1], topicArray[index]] = 
    [topicArray[index], topicArray[index - 1]]; //prettier-ignore
    updateArticle(topicArray);
  };

  const topicDown = index => {
    [topicArray[index], topicArray[index + 1]] = 
    [topicArray[index + 1], topicArray[index]]; //prettier-ignore
    updateArticle(topicArray);
  };

  const jsxArray = topicArray.map((topic, topicIndex) => {
    const { name, uuid, blockArray } = topic;
    const isFirstTopic = !Boolean(topicIndex);
    return (
      <Segment key={uuid}>
        <Segment>
          {isEditable ? (
            <Container>
              <Label color="blue" ribbon size={isFirstTopic ? "big" : "large"}>
                {isFirstTopic ? "TOPIC" : `SUBTOPIC ${topicIndex}`} TITLE
              </Label>
              <Input
                size={isFirstTopic ? "massive" : "big"}
                fluid
                value={name}
                onChange={e => nameChange(e.target.value, topicIndex)}
              />
            </Container>
          ) : (
            <Header size={isFirstTopic ? "large" : "medium"}>{name}</Header>
          )}
          {isEditable && (
            <ButtonsBar
              type="Subtopic"
              index={topicIndex}
              lastIndex={topicArray.length - 1}
              add={addTopic}
              remove={deleteTopic}
              moveUp={topicUp}
              moveDown={topicDown}
            />
          )}
        </Segment>
        <Block
          isEditable={isEditable}
          topicArray={topicArray}
          blockArray={blockArray}
          updateArticle={updateArticle}
        />
      </Segment>
    );
  });
  return jsxArray;
};

export default Article;
