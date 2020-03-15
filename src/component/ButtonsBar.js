import React from "react";
import { Container } from "semantic-ui-react";
import TooltipBtn from "./TooltipBtn";

const ButtonsBar = ({
  type,
  index,
  lastIndex,
  add,
  remove,
  moveUp,
  moveDown
}) => {
  const firstElement = index === 0;
  const lastElement = index === lastIndex;
  const isTopic = firstElement && type === "Subtopic";
  return (
    <Container>
      <TooltipBtn
        ttText={`Add ${type}`}
        icon="plus circle"
        onClick={() => add(index)}
      />
      {!firstElement && (
        <TooltipBtn
          ttText={`Delete ${type}`}
          icon="trash"
          onClick={() => remove(index)}
        />
      )}
      {!firstElement && (
        <TooltipBtn
          ttText={`Move ${type} Up`}
          icon="arrow up"
          onClick={() => moveUp(index)}
        />
      )}
      {!lastElement && (
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
