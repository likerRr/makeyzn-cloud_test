import React from 'react'
import accept from "../images/circle-check-solid.svg";
import icon from "../modules/Modal.module.css";

const AcceptIcon = () => {
  return (
    <figure className={`${icon.mainContent} ${icon.green}`}>
      <img src={accept} alt="accept" />
    </figure>
  )
}

export default AcceptIcon
