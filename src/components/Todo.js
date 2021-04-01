import React from "react";
import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo({title}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
    const deleteHandler = () => {
       setModalIsOpen(true)
    }

    const closeModalHandler = () => {
      setModalIsOpen(false)
    }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen &&  <Modal  onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      {modalIsOpen && <Backdrop closeBackdrop={closeModalHandler} />}
    </div>
  );
}

export default Todo;
