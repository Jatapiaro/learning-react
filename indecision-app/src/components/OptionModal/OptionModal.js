import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen = { !!props.selectedOption }
            onRequestClose={ props.handleUnpick }
            contentLabel = "Selected Option"
        >
            { props.selectedOption &&
                <p> { props.selectedOption } </p>
            }
            <button onClick = { props.handleUnpick } > Okay </button>
        </Modal>
    )
}

export default OptionModal;