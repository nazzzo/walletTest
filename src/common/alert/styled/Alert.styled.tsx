import styled from "styled-components";

interface StyledProps {
  color: string;
  width: string;
  height: string;
}

export const AlertWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AlertContent = styled.div<StyledProps>`
  position: relative;
  border-radius: 10px;
  padding: 2rem;
  z-index: 9;
  text-align: center;
  background: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #fff;

  & .iconify {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 5%;
    right: 3%;
    cursor: pointer;    
  }
`;

