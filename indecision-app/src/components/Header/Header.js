import React from 'react';

const Header = ((props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.description && <h2>{props.description}</h2>}
        </div>
    )
});

Header.defaultProps = {
    title: 'Indecisión',
    description: 'What should I do?'
}

export default Header;