import AllQuestions from "./AllQuestions";
import { styled } from "styled-components";
import logo from "../assets/logo.png"
import cards from './cards'
import { useState } from "react";
export default function FlashCards(){
  let [cont, setcont] = useState(0);
  let perguntas = [];

  let arrayCardsSorteados = [...cards].sort(() => {
    return Math.random()- 0.5})
     //arrayCardsSorteados = [...cards]
    for( let i = 0; i < 8; i++){
      perguntas.push(arrayCardsSorteados[i]);
    }

    console.log(perguntas)

    return (
        <Container>
            <Titulo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Titulo>

            <AllQuestions cards={perguntas} cont={cont} setcont={setcont} />

            <Footer>
                <h2> {cont}/8 CONCLUÍDOS </h2>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
  width: 375px;
  min-height: 1090px;
  background-color: #FB6B6B;
  margin: 0px auto;
  font-family: 'Recursive', sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;

  
`;

const Titulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  img{
    width: 52px;
    height: 60px;
    text-align: center;
    padding-right: 20px;
  }
  h1{
    font-family:'Righteous';
    font-weight: 400;
    font-size: 36px;
    color:white;
    line-height: 45px;
    transform:rotate(0.50deg)
    
  }

`;

const Footer = styled.div`
width: 372px;
height: 75px;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
position: fixed;
position: absolute;
bottom: 0;
right: 0;
text-align: center;
border: 2px solid #444343;

h2{
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
font-style: normal;

}
`;
