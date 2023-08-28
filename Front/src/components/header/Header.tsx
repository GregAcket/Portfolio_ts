import { styled } from "styled-components"
import TopHeader from "./TopHeader"
import TopNav from "./TopNav"

const MainHeader = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  width: 100%;
`

export default function Header() {
  return (
    <>
      <MainHeader>
        <TopHeader />
        <TopNav />
      </MainHeader>
    </>
  )
}
