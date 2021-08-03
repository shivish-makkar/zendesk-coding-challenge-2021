import './App.css';
import React, {useEffect, useState} from 'react'
import { fetchData} from "./API";
import TicketDisplayTable from "./Components/TicketDisplayTable";
import IndividualTicketModal from "./Components/IndividualTicketModal";

const pageSize = '25';

function App() {
    const [tickets, setTickets] = useState('');
    const [currentTicket, setCurrentTicket] = useState('');

    const onRowClick = (currentTicket) => {
        setCurrentTicket(currentTicket);
    };
    const onModalClose = () => {
        setCurrentTicket(null);
    };

  useEffect( async () => {
        setTickets( await fetchData());
  }, [])

  return (
    <>
      <header className="App-header">
        Mobile Ticket Viewer
      </header>
      <body>
      {tickets.length?
          <div className="TicketsInfoText">
              This page displays {pageSize} tickets, out of {tickets.length} total tickets in your account. Please
              click on the desired ticket to view more details!
          </div>
            :
          <div className="TicketsInfoText">
              Unable to retrieve ticket info right now
          </div>
      }
        <TicketDisplayTable tickets={tickets}  pageSize={pageSize} onRowClick={onRowClick}/>
      {currentTicket?
          <IndividualTicketModal ticket={currentTicket} onModalClose={onModalClose}/> : null
      }
      </body>
    </>
  );
}

export default App;
