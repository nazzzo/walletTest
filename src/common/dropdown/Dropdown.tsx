
import styled from 'styled-components'

const DropdownStyled = styled.div`
position: absolute;
top: 40px;
left: 0;
width: 100%;
max-height: 200px;
overflow-y: auto;
overflow-x: hidden;
border: 1px solid #ccc;
border-top: none;
background-color: #fff;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
z-index: 2;
`;

const DropdownItem = styled.div`
padding: 5px;
cursor: pointer;
&:hover {
    background-color: #85c0ff;
}
&:active {
    background-color: #007bff;
    color: #fff;
}
`;

interface DropdownProps {
    items: string[]
    setSelectedItem: (item: string) => void
}

export const Dropdown = ({ items, setSelectedItem }: DropdownProps) => {


    return <DropdownStyled>
        {items.map((item, index) => (
            <DropdownItem key={index} onClick={() => setSelectedItem(item)}>
                {item}
            </DropdownItem>
        ))}
    </DropdownStyled>
}