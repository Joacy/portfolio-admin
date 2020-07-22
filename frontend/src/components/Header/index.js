import React from 'react';

import {
    StyledHeader
} from './styles';

function Header (props) {
    return (
        <StyledHeader>
            <h2>{props.title}</h2>
        </StyledHeader>
    );
}


export default Header;