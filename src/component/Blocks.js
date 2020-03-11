import React from "react";
import { Button, Segment } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import Editor from "@enwee/ckeditor5-build-balloon-block";
import ckeditor5Config from "../constants/ckeditor5Config";
import { v4 as uuidv4 } from "uuid";

const Blocks = ({
  isEditable,
  topicSubtopicArray,
  blockArray,
  updateArticleState
}) => {
  const jsxArray = blockArray.map((block, blockIndex) => {
    const showDelete = Boolean(isEditable && blockIndex);
    return (
      <Segment key={block.uuid}>
        <CKEditor
          editor={Editor}
          config={ckeditor5Config}
          data={block.ckString}
          disabled={!isEditable}
          onChange={(event, editor) =>
            blockChange(editor.getData(), blockIndex)
          }
        />
        {isEditable && (
          <Button onClick={() => addBlock(blockIndex)} icon="plus circle" />
        )}
        {showDelete && (
          <Button onClick={() => deleteBlock(blockIndex)} icon="trash" />
        )}
      </Segment>
    );
  });

  const blockChange = (value, index) => {
    blockArray[index].ckString = value;
    updateArticleState(topicSubtopicArray);
  };

  const addBlock = index => {
    blockArray.splice(index + 1, 0, { ckString: "", uuid: uuidv4() });
    updateArticleState(topicSubtopicArray);
  };

  const deleteBlock = index => {
    blockArray.splice(index, 1);
    updateArticleState(topicSubtopicArray);
  };

  return jsxArray;
};

export default Blocks;
