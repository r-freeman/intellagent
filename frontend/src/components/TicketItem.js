import React from 'react';
import {useHistory} from 'react-router-dom';
import Datetime from './Datetime';

function TicketItem({ticket}) {
    let history = useHistory();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <input id="select_ticket" name="select_ticket"
                       type="checkbox"
                       className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
            </td>
            <td
                className="px-6 py-4 whitespace-nowrap">
                <p
                    className={`${ticket.status === 'unassigned'
                        ? 'bg-red-100 text-red-800'
                        : ticket.status === 'open'
                            ? 'bg-blue-400 text-white'
                            : 'bg-green-400 text-white'} inline-flex px-2 py-0.5 text-sm leading-5 font-medium rounded-full capitalize`}>
                    {ticket.status}
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap cursor-pointer"
                onClick={() => history.push(`/tickets/${ticket.reference}`)}>
                <p className="text-sm text-gray-500">
                    {ticket.reference}
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                             src={ticket.customer.twitter_photo_url}
                             alt={ticket.customer.name}/>
                    </div>
                    <div className="ml-4">
                        <p
                            className="text-sm font-medium text-gray-900">
                            {ticket.customer.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            @{ticket.customer.twitter_screen_name}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm text-gray-500 capitalize">
                    {ticket.issue_type.name}
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap cursor-pointer max-w-md"
                onClick={() => history.push(`/tickets/${ticket.reference}`)}>
                <p
                    className={`${ticket.messages[ticket.messages.length - 1].read !== true
                        ? 'font-semibold'
                        : ''} text-sm text-gray-900 truncate`}>
                    {ticket.messages[ticket.messages.length - 1].body}
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <p className="text-sm text-gray-500">
                    <Datetime
                        date={ticket.created_at}/>
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <p className="text-sm text-gray-500">
                    <Datetime
                        date={ticket.updated_at}/>
                </p>
            </td>
        </tr>
    )
}

export default TicketItem;