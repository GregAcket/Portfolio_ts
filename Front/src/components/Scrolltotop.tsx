import { styled } from "styled-components"
import Chevron from "../assets/ChevronUp"

const ToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #004b00;
  border: none;
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 300ms;

  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`
function ScrollToTopOnPageChange() {
  window.scrollTo(0, 0)
}

export default function ScrollToTop() {
  return (
    <>
      <ToTop
        onClick={ScrollToTopOnPageChange}
        aria-label="Retour en haut de page"
      >
        <Chevron />
      </ToTop>
    </>
  )
}
