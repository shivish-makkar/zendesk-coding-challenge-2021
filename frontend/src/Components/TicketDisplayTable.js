import React from 'react';
import '../App.css';
import {Table, Tag} from "antd";

// Global variable for the user's current timezone, to be displayed in column
// headings for the table
const {timeZone} = new Intl.DateTimeFormat().resolvedOptions();

// Global variable that defines how the columns should be rendered in the table
const columns = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: text => text ? text.charAt(0).toUpperCase() + text.slice(1) : "Loading",
    },
    {
        title: 'Ticket_ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
        render: text => text ? text.charAt(0).toUpperCase() + text.slice(1) : "Loading",
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 6 ? 'geekblue' : 'green';
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: `Ticket Created (${timeZone})`,
        dataIndex: 'created_at',
        key: 'created_at',
        render: date => date ? convertDateTime(new Date(date)) : "Loading",
    },
    {
        title: `Ticket Last Updated (${timeZone})`,
        dataIndex: 'updated_at',
        key: 'updated_at',
        render: date => date ? convertDateTime(new Date(date)) : "Loading",
    }
]


// Helper function to convert Date and Time to a format that is
// more easy to understand for the end user
const convertDateTime = (val) => {
    const {locale} = new Intl.DateTimeFormat().resolvedOptions();
    const date = val.toLocaleDateString(
        `${locale}`,
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );
    const time = val.toLocaleTimeString(locale, {hour: '2-digit', minute: '2-digit'});
    return `${date}; ${time}`;
}

/**
 * A functional component that displays all the tickets received by the frontend
 * in an easy to view table.
 *
 * Props Received:
 * tickets -> all the ticket data gathered by an API call
 * PAGE_SIZE -> a constant that stores the default number of items in one page
 *              of the table
 * onTicketMoreInfoRequest -> a function passed down that helps in displaying details of
 *                            an individual ticket when a row is clicked
 */
function TicketDisplayTable({tickets, onTicketMoreInfoRequest}) {
    return (
        <>
            <Table
                data-testid="TicketDisplayTable"
                columns={columns}
                dataSource={tickets}
                rowkey={tickets => tickets.id}
                className="TicketDisplayTable"
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => onTicketMoreInfoRequest(record),
                    }
                }}
                pagination={{defaultPageSize: 25, showSizeChanger: false, 'data-testid': "Pagination"}}
            />
        </>
    );
}

export default TicketDisplayTable;