import React from 'react';
import {formatDistanceToNow} from 'date-fns';

function TimeAgo({date}) {
    return (
        <time dateTime={date}>
            {formatDistanceToNow(new Date(date), {addSuffix: true})}
        </time>
    )
}

export default TimeAgo;