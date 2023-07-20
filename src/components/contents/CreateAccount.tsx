import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import request from "../../utils/request";
import { AccountState, MyAccounts, saveAccount, selectAccount } from "../../store/wallet";
import { Button, DropdownArrow } from "../../common";
import styled from "styled-components";
import { CreateMnemonic } from "./CreateMnemonic";

const ContentBoxA = styled.div``;
const ContentBoxB = styled.div`
  padding-top: 20%;

  & span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  position: relative;
  display: flex;

  .dropdown-arrow {
    right: 90px;
  }
`;


const CreateAccountWrap = styled.div`
  padding: 10% 0;
`;
const WalletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

type WalletItemProps = {
  isSelected: boolean;
};

const WalletItem = styled.li<WalletItemProps>`
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:not(:first-child) {
    background-color: ${(props) => (props.isSelected ? "#32c281" : "#bee1c3")};
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }

  > div {
    padding: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
  }
`;

interface WalletState {
  wallet: MyAccounts;
}

export const CreateAccount = () => {
  const dispatch = useDispatch();
  const { wallet } = useSelector((state: WalletState) => state.wallet);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenComponent, setIsOpenComponent] = useState(false)
  // console.log(`wallet::`, wallet);

  // const handleCreateWallet = async () => {
  //   const { data } = await request.put("/accounts");
  //   // console.log(`data:::`, data);

  //   const account: AccountState = {
  //     account: data.account,
  //     publicKey: data.publicKey,
  //     privateKey: data.privateKey,
  //     amount: 0,
  //   };

  //   dispatch(saveAccount(account));
  //   dispatch(await selectAccount(account));
  // };

  const handleClick = async (account: AccountState, index: number) => {
    dispatch(await selectAccount(account));
    setSelectedIndex(index);
  };

  return (
    <CreateAccountWrap>
      {!isOpenComponent ? (<>
        <ContentBoxA>
          <Button icon="ic:round-plus" onClick={() => { setIsOpenComponent(true) }}>
            CREATE WALLET
          </Button>
        </ContentBoxA>
        <ContentBoxB>
          <Title onClick={(() => setShowDropdown(prevState => !prevState))}>
            SHOW ACCOUNTS
            <DropdownArrow size="1.8rem" flip={!showDropdown} />
          </Title>
          {showDropdown && <WalletList>
            {wallet.map((account, index) => (
              <WalletItem
                isSelected={index === selectedIndex}
                onClick={() => handleClick(account, index)}
                key={account.account}
              >
                <div>{account.account}</div>
              </WalletItem>
            ))}
          </WalletList>}
        </ContentBoxB></>) : <CreateMnemonic setIsOpenComponent={setIsOpenComponent} />}
    </CreateAccountWrap>
  );
};
