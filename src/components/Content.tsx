import { ContentWrap } from "./styled"

interface ContentBoxProps {
    children: React.ReactNode[];
  }

export const ContentBox = ({children}: ContentBoxProps) => {
    return <ContentWrap width="80%" height="40%">{children}</ContentWrap>
}