import {format, parseISO} from 'date-fns';
import React from 'react';

function Datetime({date}) {
    const formatDate = (date) => format(parseISO(date), 'PP pp');

    return (
        <time dateTime={date}>
            {formatDate(date)}
        </time>
    )
}

export default Datetime;