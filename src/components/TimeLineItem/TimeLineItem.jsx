import React from 'react';
import './TimeLineItem.scss';

const TimeLineItem = ({year, info}) => {
    return (
        <div className="timeline__block">
            <h3 className="timeline__year">{year}</h3>
            <div className="timeline__info">
                {info}
            </div>
        </div>
    );
};

export default TimeLineItem;