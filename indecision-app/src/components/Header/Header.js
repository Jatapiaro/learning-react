import React from 'react';

const Header = ((props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.description && 
                    <h2 className="header__subtitle">{props.description}</h2>
                }
            </div>
        </div>
    )
});

Header.defaultProps = {
    title: 'Indecisión',
    description: 'What should I do?'
}

export default Header;