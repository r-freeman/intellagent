import React from 'react';

function TeamItemSkeleton() {
    return (
        <div className="px-3 py-2 w-full mx-auto">
            <div className="animate-pulse">
                <div className="bg-gray-200 rounded-md w-full py-3"/>
            </div>
        </div>
    )
}


export default TeamItemSkeleton;