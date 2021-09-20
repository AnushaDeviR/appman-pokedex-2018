import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.div`
    text-align: center;
    display: block;
    position: sticky;
`;

export default function Header() {
    return (
        <>
            <HeaderBar>
                <h1>My Pokedex</h1>
            </HeaderBar>
        </>
    )
}