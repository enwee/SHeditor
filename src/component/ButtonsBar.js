import React from "react";
import { Container } from "semantic-ui-react";
import TooltipBtn from "./TooltipBtn";

const ButtonsBar = ({
  isEditable,
  type,
  index,
  lastIndex,
  add,
  remove,
  moveUp,
  moveDown
}) => {
  const firstBlock = index === 0;
  const lastBlock = index === lastIndex;
  const showDeleteUp = isEditable && !firstBlock;
  const showDown = isEditable && !lastBlock;
  const isTopic = firstBlock && type === "Subtopic";
  return (
    <Container>
      {isEditable && (
        <TooltipBtn
          ttText={`Add ${type}`}
          icon="plus circle"
          onClick={() => add(index)}
        />
      )}
      {showDeleteUp && (
        <TooltipBtn
          ttText={`Delete ${type}`}
          icon="trash"
          onClick={() => remove(index)}
        />
      )}
      {showDeleteUp && (
        <TooltipBtn
          ttText={`Move ${type} Up`}
          icon="arrow up"
          onClick={() => moveUp(index)}
        />
      )}
      {showDown && (
        <TooltipBtn
          ttText={isTopic ? "Move Topic Down" : `Move ${type} Down`}
          icon="arrow down"
          onClick={() => moveDown(index)}
        />
      )}
    </Container>
  );
};

export default ButtonsBar;
