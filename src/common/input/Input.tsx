import { ChangeEvent } from "react";
import styled from "styled-components"

const InputStyled=styled.input`
        &:focus {
          outline: none;
        }
`

interface InputProps {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    value: string | number | undefined;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }

export const Input = ({type, id , name, placeholder, value, onChange}: InputProps) => {
    return <InputStyled type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
}