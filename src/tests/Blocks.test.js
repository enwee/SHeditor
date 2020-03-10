import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Blocks from "../component/Blocks";
//import App from "../App";
import CKEditor from "@ckeditor/ckeditor5-react";
jest.mock("@ckeditor/ckeditor5-react");

const { isEditable, topicSubtopicArray } = {
  isEditable: true,
  topicSubtopicArray: [
    {
      name: "",
      blockArray: [""]
    }
  ]
};

const jsx = (
  <Blocks
    isEditable={isEditable}
    topicSubtopicArray={topicSubtopicArray}
    topicSubtopicIndex={0}
    blockArray={topicSubtopicArray[0].blockArray}
    // updateArticleState={updateArticleState}
  />
);

describe("Blocks.js", () => {
  test("<Blocks> should render", () => {
    const { getByLabelText } = render(jsx);
    // const addNewArticleButton = getByLabelText("Create New Article");
    // fireEvent.click(addNewArticleButton);
    CKEditor.mockReturnValueOnce("");
    expect(CKEditor).toHaveBeenCalled();
  });
});
