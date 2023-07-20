import Select from "react-select";
import styled from "styled-components";

type StyledProps = {
  width?: string;
  height?: string;
};
export const SelectStyled = styled(Select)<StyledProps>`
  width: ${(props) => props.width};
`;

type OptionType = {
  label: string;
  value: string;
}
type ValueType = OptionType | OptionType[];

interface SelectorProps {
  options : OptionType[]
  selectedOption?: OptionType
  setSelectedOption?: ()=> void
  width?: string
}

export const Selector = ({ options, selectedOption, setSelectedOption, width }: SelectorProps) => {

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      fontSize: "0.9rem",
      width: "90%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      boxShadow: state.isFocused ? "none" : provided.boxShadow
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#FFFFFF",
      borderColor: "#CCCCCC",
      fontSize: "0.9rem",
      width: "90%",
      textOverflow: "ellipsis",
      overflowX: "hidden",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f2a93b" : "transparent", // 선택된 메뉴 배경색 변경
      overflowX: "hidden",
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <SelectStyled
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      styles={customStyles}
      width={width}
    />
  );
};
