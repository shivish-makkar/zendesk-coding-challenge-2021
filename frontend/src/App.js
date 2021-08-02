import './App.css';
import React, {useEffect, useState} from 'react'
import { fetchData} from "./API";
import TicketDisplayTable from "./Components/TicketDisplayTable";
import IndividualTicketModal from "./Components/IndividualTicketModal";

const startTime = '1625084286';
const initialUrl = `https://zcc-shivish.zendesk.com/api/v2/incremental/tickets/cursor.json?start_time=${startTime}`;
const pageSize = '25';


function App() {
    const [tickets, setTickets] = useState('');
    const [endOfStream, setEndOfStream] = useState(null);
    const [afterUrl, setAfterUrl] = useState('');
    const [currentTicket, setCurrentTicket] = useState('');

    const onRowClick = (currentTicket) => {
        setCurrentTicket(currentTicket);
    };
    const onModalClose = () => {
        setCurrentTicket(null);
    };

  useEffect( () => {
      fetchData(initialUrl).then(val => {
          const {tickets, end_of_stream, after_url} = val;
              setTickets(tickets);
              setEndOfStream(end_of_stream);
              setAfterUrl(after_url);
          })
  }, [])

  useEffect( () => {
      if (!endOfStream) {
          fetchData(afterUrl).then(val => {
              const {tickets, end_of_stream, after_url} = val;
              setTickets(prevTickets => prevTickets.concat(tickets));
              setEndOfStream(end_of_stream);
              setAfterUrl(after_url);
          })
      }
  }, [endOfStream, afterUrl])

  return (
    <div className="App">
      <header className="App-header">
        Mobile Ticket Viewer
      </header>
      <body>
      {tickets.length?
          <div>
              This page displays {pageSize} tickets, out of {tickets.length} total tickets
          </div>
            :
          <div>
              Unable to retrieve ticket info right now
          </div>
      }
        <TicketDisplayTable tickets={tickets} endOfStream={endOfStream} pageSize={pageSize} onRowClick={onRowClick}/>
      {currentTicket?
          <IndividualTicketModal ticket={currentTicket} onModalClose={onModalClose}/> : null
      }
      </body>
    </div>
  );
}

export default App;
