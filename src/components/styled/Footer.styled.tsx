import styled from "styled-components"
import StyledProps from "./StyledProps";

interface FooterWrapProps extends StyledProps {
    children?: React.ReactNode;
}

const FooterWrapStyled = styled.div<StyledProps>`
      display: flex;
      flex-direction: column;
      width: ${({ width }) => width};
      height: ${({ height }) => height};
      background-color: #eee;
`


export const FooterWrap = ({ width, height, children }: FooterWrapProps) => {
    return (
        <FooterWrapStyled width={width} height={height}>
            {children}
        </FooterWrapStyled>
    );
}