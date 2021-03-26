import React from 'react';

function TicketItem({ticket}) {
    return (
        <tr className="group">
            <td className="px-6 py-4 whitespace-nowrap">
                <input id="select_ticket" name="select_ticket"
                       type="checkbox"
                       className="focus:ring-blue-400 h-4 w-4 text-blue-500 border-gray-300 rounded"/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                             alt=""/>
                    </div>
                    <div className="ml-4">
                        <div
                            className="text-sm font-medium text-gray-900">
                            {ticket.customer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            @{ticket.customer.twitter_screen_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <p className={`${ticket.messages[0].read !== true ? 'font-semibold' : ''} text-sm text-gray-900`}>
                    {`${ticket.messages[0].body.substring(0, 80)}...`}
                </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`${ticket.status === 'unassigned'
                        ? 'bg-red-100 text-red-800' : ticket.status === 'open'
                            ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize`}>
                    {ticket.status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(ticket.updatedAt).toDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
                <button type="button"
                        className="rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                        id="options-menu" aria-expanded="true"
                        aria-haspopup="true">
                    <span className="sr-only">Open options</span>
                    <svg className="h-5 w-5"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                        <path
                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default TicketItem;