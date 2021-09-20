import React, { useState } from 'react'
import FetchCards from '../modal/FetchCards';
import styled from 'styled-components';
import '../../style/palette.css'


const BottomBar = styled.div`
    width: 1024px; 
    bottom: 15px;
    display: flex;
    position: relative;
    align-item: flex-end;
    justify-content: center;
    background-color: var(--bottomBarBackground);
    text-align: center;
`;

const OpenModal = styled.span`
    font-size: 4rem;
    color: var(--bottomBarTextColor);
    cursor: pointer;
    background-color: var(--bottomBarBackground);
    border-radius: 50px;
    width: 100px; 
    height: 100px;
    margin-top: -50px;
`;


//when the OpenModal is clicked, a trigger is set to true

export default function Footer() {

    const [openPopUpModel, setOpenPopUpModel] = useState(false);
    return (
        <>
            <BottomBar>
                <OpenModal onClick={() => setOpenPopUpModel(true)}>
                    <span> + </span>
                </OpenModal>
                <FetchCards trigger={openPopUpModel} setTrigger={setOpenPopUpModel} />
            </BottomBar>
        </>
    )
}

