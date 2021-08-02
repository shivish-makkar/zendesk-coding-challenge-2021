import React from 'react';
import '../App.css';
import {Divider, Modal} from "antd";

function IndividualTicketModal({ticket, onModalClose}) {
    return (
        <>
            <Modal title="Ticket Details" visible={true} onOk={onModalClose} onCancel={onModalClose}>
                <p>Subject – {ticket.subject}</p>
                <Divider className="Divider"/>
                <p> Ticket Details: </p>
                <p>{ticket.description}</p>
                <Divider className="Divider"/>
                <div>
                    Requested by: {ticket.requester_id}
                    <br/>
                    Submitted by: {ticket.submitter_id}
                    <br/>
                    Assigned to: {ticket.assignee_id}
                </div>
            </Modal>
        </>
    );
}

export default IndividualTicketModal;