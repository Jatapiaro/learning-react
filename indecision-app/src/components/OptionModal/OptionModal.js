import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen = { !!props.selectedOption }
            onRequestClose={ props.handleUnpick }
            contentLabel = "Selected Option"
            closeTimeoutMS = { 200 }
            className = "modal"
        >
            { props.selectedOption &&
                <p> { props.selectedOption } </p>
            }
            <button className="button" onClick = { props.handleUnpick } > Okay </button>
        </Modal>
    )
}

export default OptionModal;