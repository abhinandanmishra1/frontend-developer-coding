import "./modal.css";

import React from 'react'

export const Modal = ({children, onClose, show, title}) => {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal__backdrop" onClick={onClose}></div>
          <div className="modal__content">
            <span className="modal__close" onClick={onClose}>
              &times;
            </span>
            <h2 className="modal__title">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
