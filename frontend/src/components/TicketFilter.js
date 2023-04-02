import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';

function TicketFilter() {
    const {filter} = useSelector(state => state.tickets);
    const dispatch = useDispatch();
    const statuses = ['all', 'open', 'closed'];

    return (
        <div className="mt-12">
            <nav className="space-x-8">
                {statuses.map((status, index) => (
                    <button key={index} type="button"
                            className={`${status === filter
                                ? 'border-blue-500 text-blue-600'
                                : 'hover:text-gray-700 hover:border-gray-300'} border-transparent text-gray-500 focus:outline-none whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm capitalize`}
                            onClick={() => dispatch(actions.tickets.setTicketFilter(status))}>
                        {status}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default TicketFilter;



