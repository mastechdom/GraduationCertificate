import React from "react";
import styles from "./Modal.module.css"

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button onClick={onClose} className={`${styles.btnClose} btn-close`} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
