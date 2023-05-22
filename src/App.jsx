import { styled } from "styled-components";
import FlashCards from "./components/FlashCards";

export default  function App() {
  return (
    <Fundo>
      <FlashCards />
    </Fundo>
  )
}

const Fundo = styled.div`
width: 100vw;
height: 100vh;
background-color: lightgray;

`;