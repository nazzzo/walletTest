import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Input, Alert, DropdownArrow, Dropdown } from "../../common";
import { useInput } from "../../hooks"
import { MyTx, addTransaction } from "../../store";
import { Icon } from "@iconify/react";
import { useState } from "react";

const TransferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  padding: 10% 0;
  border-radius: 12px;
  width: 100%;
`;

const TransferReceived = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  margin-bottom: 20px;
  position: relative;

  > input {
    border: none;
    background-color: transparent;
    padding-left: 10px;
    position: absolute;
    width: 80%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  > .dropdown-arrow {
    right: 10px;
    top: 20%;
    color: #666;
  }
`

const TransferAmount = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 1.1rem;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-right: 5px;
    border-right: 1px solid #ccc;
    width: 30%;
  }
  > div > span {
    margin-left: 5px;
  }

  > input {
    border: none;
    background-color: transparent;
    padding: 5px;
    font-size: 16px;
    width: 70%;
  }
`;

const TransferForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Swap = () => {
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const selectedAccount = useSelector((state: any) => state.wallet.selectedWallet);
    const { transactions } = useSelector((state: any) => state.transaction)
    const savedAccounts: string[] = Array.from(new Set(transactions.map((account: MyTx) => account.receivedAccount)))
    const dispatch = useDispatch()
    const received = useInput()
    const amount = useInput()


    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault()

            const receipt = {
                sender: {
                    account: selectedAccount.account,
                    publicKey: selectedAccount.publicKey,
                },
                received: e.target.received.value,
                amount: e.target.amount.value,
                privateKey: selectedAccount.privateKey
            }
            if (receipt.amount > selectedAccount.amount) {
                setIsOpenAlert(true);
                setAlertMessage("잔액이 부족합니다");
            }
            const { data } = await axios.post("http://127.0.0.1:3000/transaction", {
                ...receipt,
            })
            if (data.transaction) {
                const transaction: MyTx = {
                    senderAccount: selectedAccount.account,
                    receivedAccount: receipt.received,
                    amount: receipt.amount,
                    timestamp: new Date(),
                };
                dispatch(addTransaction(transaction));
                const message = `성공적으로 송금되었습니다`;
                setIsOpenAlert(true);
                setAlertMessage(message);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <TransferContainer>
                <TransferForm id="transactionForm" onSubmit={handleSubmit}>
                    <TransferAmount>
                        <div><Icon icon="cryptocurrency-color:btc" /><span>BTC</span></div>
                        <Input value={amount.value} onChange={amount.onChange} type="text" id="amount" name="amount" placeholder="0" />
                    </TransferAmount>
                    <TransferAmount>
                        <div><Icon icon="cryptocurrency-color:eth" /><span>ETH</span></div>
                        <Input value={amount.value} onChange={amount.onChange} type="text" id="amount" name="amount" placeholder="0" />
                    </TransferAmount>
                    <Button icon="ant-design:swap-outlined" type="submit">Swap</Button>
                </TransferForm>
            </TransferContainer>
            <Alert isOpenAlert={isOpenAlert} onClose={() => { setIsOpenAlert(false) }} color="green" width="20rem" height="1.5rem">{alertMessage}</Alert>
        </>
    )
}