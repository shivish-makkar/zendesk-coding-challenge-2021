import React from 'react';
import '../App.css';
import {Divider, Modal, Table} from "antd";

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
                   onCancel={onTicketInfoModalClose}  data-testid="IndividualTicketModal">
                <p>Subject – {ticket.subject}</p>
                <Divider className="Divider"/>
                <p data-testid="IndividualTicketModal-Content-1"> Ticket Details: </p>
                <p data-testid="IndividualTicketModal-Content-2">{ticket.description}</p>
                <Divider className="Divider"/>
                <div data-testid="IndividualTicketModal-Content-3">
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