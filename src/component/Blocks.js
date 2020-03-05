import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

const Blocks = ({
  topicSubtopicArray,
  topicSubtopicIndex,
  blockArray,
  updateArticleState
}) => {
  const jsxArray = blockArray.map((block, blockIndex) => {
    return (
      <Form key={blockIndex}>
        <TextArea
          value={block}
          onChange={e => blockChange(e.target.value, blockIndex)}
        />
        {topicSubtopicIndex ? (
          <span>
            <Button onClick={() => addBlock(blockIndex)} icon="plus circle" />
            <Button onClick={() => deleteBlock(blockIndex)} icon="trash" />
          </span>
        ) : (
          ""
        )}
      </Form>
    );
  });

  const blockChange = (value, index) => {
    blockArray[index] = value;
    updateArticleState(topicSubtopicArray);
  };

  const addBlock = index => {
    blockArray.splice(index + 1, 0, "");
    updateArticleState(topicSubtopicArray);
  };

  const deleteBlock = index => {
    blockArray.splice(index, 1);
    updateArticleState(topicSubtopicArray);
  };

  return jsxArray;
};

export default Blocks;
