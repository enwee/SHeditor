import React from "react";
import { Segment, Label } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import CustomCKEditor from "@enwee/ckeditor5-build-balloon-block";
import ckeditor5Config from "../constants/ckeditor5Config";
import ButtonsBar from "./ButtonsBar";
import { v4 as uuidv4 } from "uuid";

const Block = ({ isEditable, topicArray, blockArray, updateArticle }) => {
  const blockChange = (value, index) => {
    blockArray[index].ckString = value;
    updateArticle(topicArray);
  };

  const addBlock = index => {
    blockArray.splice(index + 1, 0, { ckString: "", uuid: uuidv4() });
    updateArticle(topicArray);
  };

  const deleteBlock = index => {
    blockArray.splice(index, 1);
    updateArticle(topicArray);
  };

  const blockUp = index => {
    [blockArray[index - 1], blockArray[index]] = 
    [blockArray[index], blockArray[index - 1]]; //prettier-ignore
    updateArticle(topicArray);
  };

  const blockDown = index => {
    [blockArray[index], blockArray[index + 1]] = 
    [blockArray[index + 1], blockArray[index]]; //prettier-ignore
    updateArticle(topicArray);
  };

  const jsxArray = blockArray.map((block, blockIndex) => {
    return (
      <Segment key={block.uuid}>
        {isEditable && (
          <Label color="blue" ribbon content={`Block ${blockIndex + 1}`} />
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
          <ButtonsBar
            type="Block"
            index={blockIndex}
            lastIndex={blockArray.length - 1}
            add={addBlock}
            remove={deleteBlock}
            moveUp={blockUp}
            moveDown={blockDown}
          />
        )}
      </Segment>
    );
  });
  return jsxArray;
};

export default Block;
