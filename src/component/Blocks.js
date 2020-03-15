import React from "react";
import { Segment, Label } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import CustomCKEditor from "@enwee/ckeditor5-build-balloon-block";
import ckeditor5Config from "../constants/ckeditor5Config";
import TooltipBtn from "./TooltipBtn";
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
        {isEditable && (
          <Label color="blue" ribbon>
            Block
          </Label>
        )}
        <CKEditor
          editor={CustomCKEditor}
          config={ckeditor5Config}
          data={block.ckString}
          disabled={!isEditable}
          onChange={(event, editor) =>
            blockChange(editor.getData(), blockIndex)
          }
        />
        {isEditable && (
          <TooltipBtn
            ttText="Add Block"
            icon="plus circle"
            onClick={() => addBlock(blockIndex)}
          />
        )}
        {showDelete && (
          <TooltipBtn
            ttText="Delete Block"
            icon="trash"
            onClick={() => deleteBlock(blockIndex)}
          />
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
