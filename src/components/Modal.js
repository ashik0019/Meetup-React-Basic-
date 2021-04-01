import React from 'react'

function Modal(props) {

    const cancelHandler = () => {
        alert('clicked on cancel')
        props.onCancel();
    }
    const confirmHandler = () => {
        alert('clicked on confirm')
        props.onConfirm();
    }
    return (
        <div className="modal">
            <p>Are you Sure? </p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal
