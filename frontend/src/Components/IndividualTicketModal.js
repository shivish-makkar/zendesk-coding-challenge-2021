import React from 'react';
import { Modal } from "antd";

function IndividualTicketModal({ticket, onModalClose}) {
    return (
        <>
            <Modal title="Basic Modal" visible={true} onOk={onModalClose} onCancel={onModalClose}>
                <p>{ticket.subject}</p>
                <p>{ticket.description}</p>
            </Modal>
        </>
    );
}

export default IndividualTicketModal;