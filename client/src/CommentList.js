import React from 'react';

export default ({ comments }) => {

    const renderComments = Object.values(comments).map(comment => {
        return <li key={ comment.id }>{ comment.content }</li>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        <ul>
            { renderComments }
        </ul>
    </div>
};