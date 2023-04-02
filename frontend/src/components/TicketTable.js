import React from 'react';
import {useSelector} from 'react-redux';

import TicketItem from './TicketItem';

function TicketTable() {
    const {tickets} = useSelector(state => state.tickets);
    const {filter} = useSelector(state => state.tickets);

    const sortedTickets = tickets.sort((a, b) => Number(new Date(b.updated_at)) - Number(new Date(a.updated_at)));
    const filteredTickets = filter === 'all' ? sortedTickets : sortedTickets.filter(ticket => ticket.status === filter);

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input id="select_tickets" name="select_tickets" type="checkbox"
                           className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue Type
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Message
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Created
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {filteredTickets.length > 0 ?
                filteredTickets.map(ticket => {
                    return (
                        <TicketItem
                            key={ticket._id}
                            ticket={ticket}/>
                    )
                })
                :
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap" colSpan="6">
                        <div
                            className="text-sm text-gray-500">
                            No tickets.
                        </div>
                    </td>
                </tr>
            }
            </tbody>
        </table>
    )
}

export default TicketTable;