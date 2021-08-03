import React from 'react';
import '../App.css';
import {Divider, Modal} from "antd";

/**
 * A functional component that displays details of an individual ticket
 * in a pop-up style modal component.
 *
 * Props Received:
 * ticket -> the current ticket that information was requested on
 * onTicketInfoModalClose -> a function passed down that handles state to ensure that
 *                           the pop-up modal closes when the user wants it to
 */
function IndividualTicketModal({ticket, onTicketInfoModalClose}) {
    return (
        <>
            <Modal title="Ticket Details" visible={true} onOk={onTicketInfoModalClose}
                   onCancel={onTicketInfoModalClose} test-id="ModalComponent">
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