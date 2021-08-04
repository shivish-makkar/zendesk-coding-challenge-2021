import './App.css';
import React, {useEffect, useState} from 'react'
import {fetchData} from "./API";
import TicketDisplayTable from "./Components/TicketDisplayTable";
import IndividualTicketModal from "./Components/IndividualTicketModal";
import {Image, Typography} from "antd";

const {Text} = Typography;

/**
 * This functional component is where state is handled, and the
 * app component that should be rendered for the user is created
 */
function App() {
    // State handling for all tickets and the ticket the user is currently focusing on, if any
    const [tickets, setTickets] = useState('');
    const [currentTicket, setCurrentTicket] = useState('');
    const [error, setError] = useState(false);

    // Helper functions to open and close modal pop-up for a particular ticket
    const onTicketMoreInfoRequest = (currentTicket) => {
        setCurrentTicket(currentTicket);
    };
    const onTicketInfoModalClose = () => {
        setCurrentTicket(null);
    };

    // Makes an API Call when on component's initial render
    useEffect(  () => {
        fetchData().then(response => {
            if (response === "Error") {
                setError(true);
            } else {
                console.log("val")
                const result = response.map(ticket =>  ({key: ticket.id, ...ticket}))
                setTickets(result)
            }
        });
    }, [])

    if (error) {
        return (
            <>
                <Image
                    width={'100vw'}
                    src="./500-error.png"
                />
                <Text className="Error-Text">
                    Working to get it running ASAP!
                </Text>
            </>
        );
    } else {
        return (
            <>
                <div className="App-header">
                    Ticket Viewer
                </div>
                <div>
                    {tickets.length ?
                        <div className="TicketsInfoText" data-testid="TicketsInfoText">
                            This page displays 25 tickets, out of {tickets.length} total tickets in your account.
                            Please click on the desired ticket to view more details!
                        </div>
                        :
                        <div className="TicketsInfoText" data-testid="TicketsInfoText">
                            Loading tickets
                        </div>
                    }
                    <TicketDisplayTable
                        key={1}
                        tickets={tickets}
                        onTicketMoreInfoRequest={onTicketMoreInfoRequest}
                        data-testid="TicketDisplayTable"
                    />
                    {currentTicket ?
                        <IndividualTicketModal
                            key={2}
                            ticket={currentTicket}
                            onTicketInfoModalClose={onTicketInfoModalClose}

                        /> : null
                    }
                </div>
            </>
        );
    }
}

export default App;
