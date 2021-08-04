import React from 'react';
import { render, screen } from '@testing-library/react';
import IndividualTicketModal from "../Components/IndividualTicketModal";
import { mockSingleTicketData } from '../mockData'


test('Individual ticket modal component shows up', () => {
    render(<IndividualTicketModal ticket={mockSingleTicketData}/>);
    const linkElement = screen.getByTestId("IndividualTicketModal");
    expect(linkElement).toBeInTheDocument();
});

test('Individual ticket modal contains correct data', () => {
    render(<IndividualTicketModal ticket={mockSingleTicketData}/>);
    const linkElement1 = screen.getByTestId("IndividualTicketModal-Content-1")
    const linkElement2 = screen.getByTestId("IndividualTicketModal-Content-2")
    const linkElement3 = screen.getByTestId("IndividualTicketModal-Content-3")
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});
