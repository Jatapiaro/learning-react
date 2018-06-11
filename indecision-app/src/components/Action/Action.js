import React from 'react';

const Action = ((props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                className="btn btn-success">
                What should I do?
                </button>
            <br />
        </div>
    );
});

export default Action;