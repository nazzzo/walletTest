import styled from 'styled-components'
import { Modal } from "../modal"
import { useState } from 'react'
import { Icon } from '@iconify/react';
import { IButton } from '../../components';


const CircleBtnStyled = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: #7dcb9f;
    display: flex;
    justify-content:center;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;

    & .iconify {
        font-size: 2rem;
        color: #fff;
    }

    &:hover {
        background: #9bb7a6;
        transition: all 0.3s ease-out;  
    }
`


export const CircleBtn = ({ icon, onClick }: IButton) => {
    return (
        <>
            <CircleBtnStyled color="green" onClick={onClick}><Icon icon={icon ?? ""} /></CircleBtnStyled>
        </>
    )
}