import React from "react";
import cancel from "../../images/circle-xmark-solid.svg";
import icon from "../../modules/Modal.module.css";

const AcceptIcon = () => {
  return (
    <figure className={`${icon.mainContent} ${icon.red}`}>
      <img src={cancel} alt="accept" />
    </figure>
  );
};

export default AcceptIcon;
