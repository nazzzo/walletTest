import React from 'react';

type WalletListProps = {
  walletList: string[];
  handleClick: (account: string) => void;
};

const WalletList: React.FC<WalletListProps> = ({ walletList, handleClick }) => {
  return (
    <div>
      <h2>Wallet List</h2>
      <ul>
        {walletList.map((account) => (
          <li key={account} onClick={() => handleClick(account)}>
            {account}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletList;
