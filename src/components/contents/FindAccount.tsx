import styled from "styled-components"
import { Button } from "../../common"
import { FormEvent } from "react"
import axios from "axios"

export const FindAccount = () => {
    const FindAccountWrap = styled.div`
        padding: 15% 0;
    `

    const ContentHeaderText = styled.div`
        padding: 5% 0;
        color: #3cc086;
        font-weight: bold;
    `

    const FindAccountForm = styled.form`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > div {
            max-width: 48%;
            margin-bottom: 8%;
        }
    `
    const InputContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const CircleNumber = styled.span`
        color: #58b07d;
        border: 2px solid #58b07d;
        border-radius: 50%;
        min-width: 1.5rem;
        min-height: 1.5rem;
        font-size: 0.8rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
    `

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // mnemonic::: review bonus extra asset citizen finger cricket outside acquire soft hospital change
        // a7b52d4d2633e88cd7e19be3511ebdcc29a5056de26e6b63989e97819189b1f3
        // mnemonic::: put scan excite volcano critic wealth message pony worth monkey young rack

        e.preventDefault()
        let mnemonic = '';
        const form = e.target as HTMLFormElement
        for (let i = 0; i < 12; i++) {
            const inputValue = form[`key${i + 1}`].value;
            mnemonic += inputValue + ' ';
        }
        // const mnemonic = "review bonus extra asset citizen finger cricket outside acquire soft hospital change"
        const { data : privateKey } = await axios.post("http://127.0.0.1:3000/findAccount", { mnemonic })
        console.log(privateKey)
    }


    const renderInputContainers = () => {
        const inputContainers = [];
        for (let i = 0; i < 12; i++) {
          inputContainers.push(
            <InputContainer key={i} className="relative flex-grow w-full">
              <CircleNumber>{i + 1}</CircleNumber>
              <input
                type="text"
                name={`key${i + 1}`}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </InputContainer>
          );
        }
        return inputContainers;
      }

    return (
        <FindAccountWrap>
            <ContentHeaderText>Please enter the mnemonic key</ContentHeaderText>
            <FindAccountForm onSubmit={handleSubmit}>
                {renderInputContainers()}
                <Button>FIND ACCOUNT</Button>
            </FindAccountForm>
        </FindAccountWrap>
    )
}