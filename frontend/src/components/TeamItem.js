import React from 'react';

function TeamItem({team}) {
    return (
        <button type="button" key={team._id}
                className="w-full group flex items-center px-3 py-2 text-base sm:text-sm leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
            <span
                className={`bg-${team.colour}-500 w-2.5 h-2.5 mr-4 rounded-full`}
                aria-hidden="true"/>
            <span className="truncate">
                {team.name}
            </span>
        </button>
    )
}


export default TeamItem;