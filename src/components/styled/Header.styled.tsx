import styled from "styled-components"
import StyledProps from "./StyledProps";
import { Icon } from '@iconify/react';
import { DropdownDot } from "../../common";

interface HeaderWrapProps extends StyledProps {
    children: React.ReactNode;
}

const HeaderWrapStyled = styled.div<StyledProps>`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 2% 5% 5% 5%;
      width: ${({ width }) => width};
      min-height: ${({ height }) => height};
      background-color: #29b378;
`

const HeaderTitle = styled.div`
    display: flex;
    padding-left: 20px;
    margin-bottom: 10px;
`

const Logo = styled.div`
  width: 100%;
  height: 20px;
  padding-top: 10px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  & span {
    padding-left: 4px;
  }
`;


export const HeaderWrap = ({ width, height, children }: HeaderWrapProps) => {
    return (
        <HeaderWrapStyled width={width} height={height}>
          <HeaderTitle><Logo><Icon icon="cryptocurrency-color:btc" className="w-5 h-5" /><span>My Wallet</span></Logo>
            <DropdownDot style={{ width: '2rem', height: '2rem' }} />
          </HeaderTitle>
            {children}
        </HeaderWrapStyled>
    );
}