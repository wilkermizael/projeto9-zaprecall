/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Question from "./Question";
import { styled } from "styled-components";


export default function AllQuestions ({cards, cont, setcont}){
    
return(
    
    <PerguntasContainer>
       {cards.map( (i,index) =><Question 
       key={index}
       cards={cards} 
       index={index}
       cont={cont}
       setcont={setcont}
       />)}
    </PerguntasContainer>
)

}


const PerguntasContainer = styled.div`
width: 300px;
height: auto;
box-sizing: content-box;
display:flex;
justify-content: space-between;
flex-direction: column;
position: absolute;
top:150px;

font-family: 'Recursive', sans-serif;
`;

        