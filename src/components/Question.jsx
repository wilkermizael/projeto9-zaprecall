/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";
import setaPlay from '../assets/seta_play.png'
import seta_Virar from "../assets/seta_virar.png"
import icone_certo from "../assets/icone_certo.png"
import icone_quase from "../assets/icone_quase.png"
import icone_erro from "../assets/icone_erro.png"
export default function Question ({cards,index, cont, setcont}){

   let [primeiratela , setprimeiratela] = useState(true)
   let [segundatela , setsegundatela] = useState(false)
   let [terceiratela, setterceiratela] = useState(false)
   let [quartatela, setquartatela]= useState(false)
   let [icone, seticone]= useState('')
   let [linha, setlinha] = useState('')
   //let [meucont, setmeucont] = useState(0)
   const naolembrei = '#FF3030';
   const quaselembrei ='#FF922E';
   const zap = '#2FBE34';
   let contador = 0;
   
   
  
    function naoLembrei(){
    setterceiratela(false)
    setquartatela(true)
    setlinha('#FF3030')
    contador++
    setcont(cont + contador)
    seticone(icone_erro)
}
    function quaseLembrei(){
    setterceiratela(false)
    setquartatela(true)
    setlinha('#FF922E')
    contador++
    setcont(cont + contador)
    seticone(icone_quase)
}
function lembrei(){
    setterceiratela(false)
    setquartatela(true)
    setlinha('#2FBE34')
    contador++
    setcont(cont + contador)
    seticone(icone_certo)
}

    function setaInicio(){

    setprimeiratela(false)
    setsegundatela(true)
        
} 
    function setaVirar(){
       setsegundatela(false)
       setterceiratela(true)
       

   }
   
   if(primeiratela == true){
        return(<>
        <Estagio1>
            <div>
                <p> Pergunta {index + 1 } </p>
                <img onClick={setaInicio} src={setaPlay} alt="seta" />    
            </div>
           
        </Estagio1>
        </>)
    }

    if(segundatela === true){
        return(
            <>
            <Estagio2>
                <div>
                    <p>{cards[index].question} </p>
                    <img onClick={setaVirar} src={seta_Virar} alt="seta" />    
                </div>
            </Estagio2>
            </>
            )
    }

    if(terceiratela === true){
        return(
            <>
            <Estagio3>
            <div>
                <p>{cards[index].answer} </p>
            </div>
            <div>
                
                <Botao onClick={naoLembrei} cor={naolembrei}>Não lembrei</Botao>
                <Botao onClick={quaseLembrei} cor={quaselembrei}>Quase lembrei</Botao> 
                <Botao onClick={lembrei} cor={zap}>Zap!</Botao>  
            </div>
            </Estagio3>
            </>
        )
    }

    if(quartatela === true){
        return(<>
            <Estagio4 >
                <div>
                    <Paragrafo linha={linha}> Pergunta {index + 1 } </Paragrafo>
                    <img src={icone} alt="seta" />    
                </div>
               
            </Estagio4>
            </>)
    }
  
    
}

const Estagio1 = styled.div`
    
    min-height: 65px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d0cdcd;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 15px;
    
    
   
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    img{
        width: 20px;
        height: 23px;
        color:#333333;
        
        
        
    }
`;
const Estagio2 = styled.div`
    
    min-height: 100px;
    background-color: #FFFFD4;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d0cdcd;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    position: relative;
    
   
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    img{
        width: 20px;
        height: 23px;
        color:#333333;
        position: absolute;
        bottom: 0;
        right: 1em;
        
    }
`;

const Estagio3 = styled.div`
    min-height: 120px;
    background-color: #FFFFD4;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #d0cdcd;
    margin-bottom: 5px;
    border-radius: 5px;
    margin: 5px;

    
    
   >div{
    width: 300px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    
       
   }

   
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    button{
       width :85px;
       height: 37px;
       color:white;
       border-radius: 5px;
       padding: 5px;
        
    }
`;

const Botao = styled.button`
    background-color:${props => props.cor};

`;

const Estagio4 = styled.div`
    
    min-height: 65px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d0cdcd;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 15px;
    
    
   
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration:line-through;
        
    }
    img{
        width: 20px;
        height: 23px;
        color:#333333;
        
        
        
    }
`;

const Paragrafo = styled.p`

color:${props => props.linha};
`;