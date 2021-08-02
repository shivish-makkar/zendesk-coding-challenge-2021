import React from 'react';
import '../App.css';
import {Table, Tag} from "antd";

const {timeZone} = new Intl.DateTimeFormat().resolvedOptions();
const convertDateTime = (val) => {
    const {locale} = new Intl.DateTimeFormat().resolvedOptions();
    const date =  val.toLocaleDateString(
        `${locale}`,
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );
    const time = val.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    return `${date}; ${time}`;
}

const columns = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: text => text? text.charAt(0).toUpperCase() + text.slice(1) : "Loading",
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
        render: text => text? text.charAt(0).toUpperCase() + text.slice(1): "Loading",
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
        render: date => date? convertDateTime(new Date(date)) : "Loading",
    },
    {
        title: `Ticket Last Updated (${timeZone})`,
        dataIndex: 'updated_at',
        key: 'updated_at',
        render: date => date? convertDateTime(new Date(date)) : "Loading",
    }
]

function TicketDisplayTable({tickets, pageSize, onRowClick}) {
    return (
        <div>
        <Table
            columns={columns}
            dataSource={tickets}
            rowKey={tickets => tickets.id}
            className="TicketDisplayTable"
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => onRowClick(record),
                }
            }}
            pagination={{defaultPageSize:pageSize, showSizeChanger: false}}
        />
        </div>
    );
}

export default TicketDisplayTable;