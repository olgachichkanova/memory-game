import React from 'react';
export const Steps = ({title, count}) => {
    return (
        <div className="steps">
            <h2>{title}</h2>
            <p>{count}</p>
        </div>
    )
}