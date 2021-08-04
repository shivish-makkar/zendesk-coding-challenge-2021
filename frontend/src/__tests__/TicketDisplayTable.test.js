import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketDisplayTable from "../Components/TicketDisplayTable";
import {tenTicketsData, twentyFiveTicketsData, thirtyTicketsData} from '../mockData'
import userEvent from "@testing-library/user-event";

test('table renders correctly with 10 data points', () => {
    render(<TicketDisplayTable tickets={tenTicketsData}/>);
    const linkElement = screen.getByTestId("TicketDisplayTable").getElementsByClassName('ant-table-row');
    expect(linkElement).toHaveLength(10);
});

test('table renders correctly with 25 data points', () => {
    render(<TicketDisplayTable tickets={twentyFiveTicketsData}/>);
    const linkElement = screen.getByTestId("TicketDisplayTable").getElementsByClassName('ant-table-row');
    expect(linkElement).toHaveLength(25);
});

test('table renders correctly (i.e. shows 25 rows) with 30 data points', () => {
    render(<TicketDisplayTable tickets={thirtyTicketsData}/>);
    const linkElement = screen.getByTestId("TicketDisplayTable")
        .getElementsByClassName('ant-table-row');
    expect(linkElement).toHaveLength(25);
});


test('pagination shows', () => {
    render(<TicketDisplayTable tickets={tenTicketsData}/>);
    const linkElement = screen.getByTestId("Pagination")
    expect(linkElement).toBeInTheDocument();
});

