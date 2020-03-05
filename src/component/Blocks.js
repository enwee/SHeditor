import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

const Blocks = ({ topicSubtopicArray, blockArray, updateArticleState }) => {
  const jsxArray = blockArray.map((block, blockIndex) => {
    return (
      <Form key={blockIndex}>
        <TextArea
          value={block}
          onChange={e => blockChange(e.target.value, blockIndex)}
        />
        <Button
          onClick={() => addBlock(Number(blockIndex))}
          icon="plus circle"
        />
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

  return jsxArray;
};

export default Blocks;
