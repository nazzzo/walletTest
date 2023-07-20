import { useState } from "react";
import { Header, ContentBox, Footer } from ".";
import { MainWrap } from "./styled/Main.styled";
import { CreateAccount, Transfer, TxHistory, Swap, FindAccount } from "./contents";

export interface IButton {
  icon?: string;
  onClick?: () => void;
  type?: string;
  children?: React.ReactNode;
}

interface State {
  showCreateAccount: boolean;
  showTransfer: boolean;
  showTransaction: boolean;
  showSwap: boolean;
}

export const Main2 = () => {
  const [state, setState] = useState<State>({
    showCreateAccount: false,
    showTransfer: true,
    showTransaction: false,
    showSwap: false,
  });

  const buttons: IButton[] = [
    { icon: "mdi:wallet-plus-outline", onClick: () => setState({ ...state, showCreateAccount: true, showTransfer: false, showTransaction: false, showSwap: false }) },
    { icon: "solar:card-transfer-bold", onClick: () => setState({ ...state, showCreateAccount: false, showTransfer: true, showTransaction: false, showSwap: false }) },
    { icon: "fluent:navigation-16-filled", onClick: () => setState({ ...state, showCreateAccount: false, showTransfer: false, showTransaction: true, showSwap: false }) },
    { icon: "ant-design:swap-outlined", onClick: () => setState({ ...state, showCreateAccount: false, showTransfer: false, showTransaction: false, showSwap: true }) },
  ];

  return (
    <MainWrap width="380px" height="600px">
      <Header buttons={buttons} />
      <ContentBox>
        {state.showCreateAccount && <CreateAccount />}
        {state.showTransfer && <Transfer />}
        {state.showTransaction && <TxHistory />}
        {/* {state.showSwap && <Swap />} */}
        {state.showSwap && <FindAccount />}
      </ContentBox>
      <Footer />
    </MainWrap>
  );
};
