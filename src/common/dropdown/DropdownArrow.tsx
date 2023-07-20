import { Icon } from "@iconify/react";
import styled from "styled-components"

interface StyledProps {
    color?: string;
    width?: string;
    height?: string;
    flip? : boolean;
}

const DropdownArrowStyled = styled.span<StyledProps>`
    position: absolute;
    top: 0%;
    transform: translateY(-10%) ${(props) => (props.flip ? "rotate(180deg)" : "none")};
    transition: all 0.1s ease-out;
`;
interface DropdownArrowProps {
    size?: string
    color? : string
    flip? : boolean
}

export const DropdownArrow = ({ size, flip }: DropdownArrowProps) => {
    return <DropdownArrowStyled className="dropdown-arrow" flip={flip} ><Icon icon="ic:outline-keyboard-arrow-down" fontSize={size ?? "1rem"} /></DropdownArrowStyled>
}