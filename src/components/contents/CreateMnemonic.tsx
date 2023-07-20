import { useState } from "react";
import { useDispatch } from "react-redux";
import { AccountState, saveAccount, selectAccount } from "../../store/wallet";
import { Button } from "../../common";
import styled from "styled-components";
import axios from "axios";
import { Icon } from "@iconify/react";

const MnemonicContainer = styled.div`
  padding: 10% 0;
`;

const MnemonicKey = ({ mnemonic }: any) => {
    const ContainerWrap = styled.div`
        margin: 40px 0;
        display: flex;
        width: 100%;
        min-height: 200px;
        flex-wrap: wrap;
    `
    const WarnText =styled.span`
        color: #27825b;
        font-weight: bold;
        margin-bottom: 16px;
    `

    const KeyWrap = styled.div`
        margin-right: 3%;
        margin-bottom: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const CircleNumber = styled.span`
        color: #58b07d;
        border: 2px solid #58b07d;
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
        font-size: 0.8rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
    `

    return (
      <ContainerWrap>
        <WarnText>Don't forget your mnemonic key, Please store it in a secure place!</WarnText>
        {mnemonic.map((word: string, index: number) => (
              <KeyWrap className="bg-gray-100 rounded flex p-2 h-full">
                <CircleNumber>{index + 1}</CircleNumber>
                <span className="title-font font-medium">{word}</span>
              </KeyWrap>
        ))}
      </ContainerWrap>
    );
  };
  
  type CreateMnemonicProps = {
    setIsOpenComponent: (isOpen: boolean) => void;
  };

export const CreateMnemonic = ({setIsOpenComponent}: CreateMnemonicProps) => {
    const dispatch = useDispatch();
    const [mnemonic, setMnemonic] = useState([]);
    const [account, setAccount] = useState<AccountState>();

    const generateKeys = async () => {
        const { data: generatedKey } = await axios.get("http://127.0.0.1:3000/getMnemonic")
        setMnemonic(generatedKey.split(" "));
        const { data: generatedAccount } = await axios.post("http://127.0.0.1:3000/createAccount", { generatedKey })
        setAccount(generatedAccount)

        console.log(`mnemonic:::`, generatedKey)
        // mnemonic::: over zoo stool spare soda jazz tonight review neither crazy parade index
    };

    

    const handleSaveAccount = async () => {
        if (account) {
            dispatch(saveAccount(account));
            dispatch(await selectAccount(account));
            setIsOpenComponent(false)
        }
    };

    return (
        <MnemonicContainer>
        <Button icon="ic:round-plus" onClick={generateKeys}>GENERATE KEYS</Button>
        {mnemonic && (
                <>
                    <MnemonicKey mnemonic={mnemonic} />
                    {account &&<Button onClick={handleSaveAccount}>SAVE ACCOUNT</Button>}
                </>
        )}
        </MnemonicContainer>
    );
};
