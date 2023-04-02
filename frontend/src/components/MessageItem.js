import React from 'react';
import {useSelector} from 'react-redux';
import Datetime from './Datetime';

function MessageItem({message, index}) {
    const {user} = useSelector(state => state.auth);
    const {ticket} = useSelector(state => state.tickets);

    return (
        <li className="relative pb-8">
            <span
                className={`${(index + 1 === ticket.messages.length || ticket.messages.length === 1)
                    ? 'hidden'
                    : 'absolute'} top-5 left-5 -ml-px h-full w-0.5 bg-gray-200`}
                aria-hidden="true"/>
            <div className="flex relative space-x-4">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full ring-8 ring-white"
                        src={`${message.incoming
                            ? ticket.customer.twitter_photo_url
                            : user.photo}`}
                        alt=""/>
                </div>
                <div>
                    <p className="font-medium text-gray-900">{message.incoming
                        ? ticket.customer.name
                        : user.name}</p>
                    <p className="mt-0.5 text-sm text-gray-500">
                        <Datetime date={message.created_at}/>
                    </p>
                    <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">
                        {message.body}</p>
                </div>
            </div>
        </li>
    )
}

export default MessageItem;