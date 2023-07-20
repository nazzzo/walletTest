import { AccountState } from "../../store"
import { Icon } from '@iconify/react';
import { useRef, useState } from "react";
import styled from 'styled-components'



const AccountInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BTCAmount = styled.div`
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;

    
    & span {
        font-size: 1.6rem;
        padding-left: 5%;
    }
`
const AccountInput = styled.input`
    display: none;
`;

const CurrentAccount = styled.div`
    cursor: pointer;
    padding: 2% 0 5% 0;
    display: flex;
    align-items: center;
    color: #eee;

    & span {
        width: 100px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
    }

    & .iconify {
        font-size: 1.2rem;
        margin-right: 3%;
        transition: all 0.3s ease-out;
    }
`

interface AccountProps {
    account: string
    amount: number
}

export const AccountInfo = ({ account, amount }: AccountProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [icon, setIcon] = useState({ name: "mingcute:copy-2-fill", color: "#fff", fontSize: "1rem" });

    const handleCopyClipBoard = async () => {
      try {
        inputRef.current!.value = account;
        await navigator.clipboard.writeText(account);
        setIcon({ name: "material-symbols:library-add-check", color: "#f9ff86", fontSize: "1.5rem" });
        setTimeout(() => {
          setIcon({ name: "mingcute:copy-2-fill", color: "#fff", fontSize: "1rem" });
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };
    return (<AccountInfoWrap>
        <BTCAmount>{amount}<span>BTC</span></BTCAmount>
        <CurrentAccount  onClick={handleCopyClipBoard}>
            <span>{account}</span>
            <Icon icon={icon.name} style={{ fontSize: icon.fontSize, color: icon.color }} />
            <AccountInput ref={inputRef} type="text" readOnly />
        </CurrentAccount>
    </AccountInfoWrap>
    )
}