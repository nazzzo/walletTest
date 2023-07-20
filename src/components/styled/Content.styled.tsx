import styled from "styled-components"
import StyledProps from "./StyledProps";

interface ContentWrapProps extends StyledProps {
    children: React.ReactNode;
}

const WrapStyled = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #fff;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #eee;
        border-radius: 5px;
    }
`

const ContentWrapStyled = styled.div<StyledProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: 0 auto;
`

export const ContentWrap = ({ width, height, children }: ContentWrapProps) => {
    return (
        <WrapStyled>
            <ContentWrapStyled height={height} width={width}>
                {children}
            </ContentWrapStyled>
        </WrapStyled>
    );
}
