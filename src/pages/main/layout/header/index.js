import React from 'react';
import './styles.scss';

export default function Header(props) {
    const { BackgroundUrl } = props;

    return (
        <div className='HEADER_STYLES'>
            <header className="header" style={{ backgroundImage: `url(${BackgroundUrl})` }}>
                {props.children}
            </header>
        </div>
    )
}
