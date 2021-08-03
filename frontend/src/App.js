import './App.css';
import React, {useEffect, useState} from 'react'
import {fetchData} from "./API";
import TicketDisplayTable from "./Components/TicketDisplayTable";
import IndividualTicketModal from "./Components/IndividualTicketModal";

const PAGE_SIZE = '25';

/**
 * This functional component is where state is handled, and the
 * app component that should be rendered for the user is created
 */
function App() {
    // State handling for all tickets and the ticket the user is currently focusing on, if any
    const [tickets, setTickets] = useState('');
    const [currentTicket, setCurrentTicket] = useState('');

    // Helper functions to open and close modal pop-up for a particular ticket
    const onTicketMoreInfoRequest = (currentTicket) => {
        setCurrentTicket(currentTicket);
    };
    const onTicketInfoModalClose = () => {
        setCurrentTicket(null);
    };

    // Makes an API Call when on component's initial render
    useEffect(  () => {
        fetchData().then(response => setTickets(response));
    }, [])

    return (
        <>
            <header className="App-header">
                Mobile Ticket Viewer
            </header>
            <body>
            {tickets.length ?
                <div className="TicketsInfoText">
                    This page displays {PAGE_SIZE} tickets, out of {tickets.length} total tickets in your account.
                    Please
                    click on the desired ticket to view more details!
                </div>
                :
                <div className="TicketsInfoText">
                    Loading tickets
                </div>
            }
            <TicketDisplayTable tickets={tickets} pageSize={PAGE_SIZE}
                                onTicketMoreInfoRequest={onTicketMoreInfoRequest}/>
            {currentTicket ?
                <IndividualTicketModal ticket={currentTicket} onTicketInfoModalClose={onTicketInfoModalClose}/> : null
            }
            </body>
        </>
    );
}

export default App;
