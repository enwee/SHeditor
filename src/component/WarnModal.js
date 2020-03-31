import React from "react";
import { Modal } from "semantic-ui-react";

const WarnModal = ({ open, header, content, clickOk, clickCancel }) => {
  const actions = [
    {
      key: "Ok",
      content: "Ok",
      positive: true,
      onClick: clickOk
    }
  ];

  if (clickCancel)
    actions.unshift({
      key: "Cancel",
      content: "Cancel",
      negative: true,
      onClick: clickCancel
    });

  return (
    <Modal open={open} header={header} content={content} actions={actions} />
  );
};

export default WarnModal;
