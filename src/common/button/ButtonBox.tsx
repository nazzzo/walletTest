import styled from 'styled-components'

const ButtonBoxStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 5%;
`


interface ButtonBoxProps {
    children: React.ReactNode;
}

export const ButtonBox = ({children}: ButtonBoxProps) => {
    return <ButtonBoxStyled>{children}</ButtonBoxStyled>
}