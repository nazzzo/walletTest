import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { IButton } from '../../components';



const ButtonStyled = styled.button`
    width: 100%;
    height: 3.5rem;
    border-radius: 6px;
    text-align: center;
    background: #007bff;
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    position: relative;

    & .iconify {
        font-size: 2rem;
        color: #fff;
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background: #0069d9;
        transition: all 0.3s ease-out;  
    }
`


export const Button = ({ icon, onClick, children }: IButton) => {

    return (
        <>
            <ButtonStyled color="green" onClick={onClick}><Icon icon={icon ?? ""} />{children}</ButtonStyled>
        </>
    )
}