import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MyTx } from '../../store';
import { Icon } from '@iconify/react';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
  width: 260px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TimeStamp = styled.div`
  color: gray;
  font-size: 0.85rem;
`;

const Receiver = styled.div`
    cursor: pointer;
    font-weight: bold;
    padding-top: 5px;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;

    & span {
        width: 200px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
    }

    & .iconify {
        font-size: 1.2rem;
        margin-right: 3%;
        transition: all 0.3s ease-out;
    }
`;

const SendInfo = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
`

const Sender = styled.div`
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: transparent;
`;
const Amount = styled.div`
  color: green;
  font-weight: bold;
  font-size: 1.2rem;
`;




export const TxHistory = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const { transactions } = useSelector((state: any) => state.transaction);

  const handleCopyClipBoard = async (account: string, index: number) => {
    try {
      await navigator.clipboard.writeText(account);
      setSelectedIdx(index);
      setTimeout(() => {
        setSelectedIdx(-1);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Title>Transaction History</Title>
      <List>
        {transactions.slice().reverse().map((tx: MyTx, index: number) => (
          <ListItem key={index}>
            <TimeStamp>{new Date(tx.timestamp).toLocaleString()}</TimeStamp>
            <Receiver onClick={() => handleCopyClipBoard(tx.receivedAccount, index)}>
              <span>{tx.receivedAccount}</span>
              <Icon
                icon={selectedIdx === index ? "material-symbols:library-add-check" : "mingcute:copy-2-fill"}
                style={{
                  fontSize: selectedIdx === index ? "1.5rem" : "1rem",
                  color: selectedIdx === index ? "green" : "#666",
                }}
              />
            </Receiver>
            <SendInfo>
              <Sender>Sender: {tx.senderAccount}</Sender>
              <Amount>{tx.amount}BTC</Amount>
            </SendInfo>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
