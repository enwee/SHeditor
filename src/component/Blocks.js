import React from "react";
import { Button, Segment } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import Editor from "./ckeditor5";
import ckeditor5Config from "../constants/ckeditor5Config";

const Blocks = ({
  isEditable,
  topicSubtopicArray,
  topicSubtopicIndex,
  blockArray,
  updateArticleState
}) => {
  const jsxArray = blockArray.map((block, blockIndex) => {
    return (
      <Segment key={blockIndex}>
        <CKEditor
          editor={Editor}
          config={ckeditor5Config}
          data={block}
          disabled={!isEditable}
          onChange={(event, editor) =>
            blockChange(editor.getData(), blockIndex)
          }
        />
        {isEditable && topicSubtopicIndex ? (
          <span>
            <Button onClick={() => addBlock(blockIndex)} icon="plus circle" />
            <Button onClick={() => deleteBlock(blockIndex)} icon="trash" />
          </span>
        ) : (
          ""
        )}
      </Segment>
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
