import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App header renders correct text', () => {
  render(<App />);
  const header = screen.getByText("Mobile Ticket Viewer");
  expect(header).toBeInTheDocument();
});

test('Tickets Info Display renders', () => {
  render(<App />);
  const header = screen.getByTestId("TicketsInfoText");
  expect(header).toBeInTheDocument();
});

test('Ticket Table renders', () => {
  render(<App />);
  const linkElement = screen.getByTestId("TicketDisplayTable");
  expect(linkElement).toBeInTheDocument();
});
