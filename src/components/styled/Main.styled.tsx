import styled from "styled-components";
import StyledProps from "./StyledProps";

interface MainWrapProps extends StyledProps {
  children: React.ReactNode;
}

const MainWrapStyled = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #fff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.7);
  margin: 0 auto;
`;


export const MainWrap = ({ width, height, children }: MainWrapProps) => {
  return (
    <MainWrapStyled width={width} height={height}>
      {children}
    </MainWrapStyled>
  );
};