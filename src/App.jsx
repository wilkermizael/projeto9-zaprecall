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
margin: 0;
padding: 0;
height: 100vh;
background-color: #c1c1c1;
`;