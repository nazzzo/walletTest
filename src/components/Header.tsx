import { useSelector } from "react-redux";
import { CircleBtn, ButtonBox } from "../common/button"
import { IButton } from "./Main";
import { HeaderWrap } from "./styled"
import { AccountInfo } from "./contents";

interface HeaderProps {
    buttons: IButton[];
}

export const Header = ({ buttons }: HeaderProps) => {
    const selectedAccount = useSelector((state:any) => state.wallet.selectedWallet);

    return (
        <HeaderWrap width="100%" height="230px">
            <AccountInfo account={selectedAccount?.account} amount={selectedAccount?.amount} />
            <ButtonBox>
                {buttons.map(({ icon, onClick }) => (
                    <CircleBtn key={icon} icon={icon} onClick={onClick} />
                ))}
            </ButtonBox>
        </HeaderWrap>
    );
};
