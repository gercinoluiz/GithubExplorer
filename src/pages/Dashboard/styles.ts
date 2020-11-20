import styled, { css } from "styled-components";
import { shade } from "polished"

interface hasError {
    hasError: boolean
}

export const Repositories = styled.div`

   
    max-width:700px;
    margin-top:80px;
    
    a {
        text-decoration:none;
        width:100%;
        padding: 24px;
        display:block;
        border-radius: 5px;
        background: #FFFF;

        display:flex;
        align-items:center;

        transition: transform 0.2s;

        &:hover{
           transform: translateX(10px);
        }

        // Quando um a for precedido de outro a aplicar o que tem abaixo
        // isso dá stilo do primeiro para frente
        & + a {
        margin-top:10px
    }

        img{
            border-radius: 50%;
            width:64px;
            height:64px;

        }

        div{
            margin: 0 16px;
            flex:1;

            strong{
                font-size:20px;
                color:#3D3D4D;

            }

            p{
               font-size:18px;
               color:#A8A8B3;
               margin-top:4px; 
            }
        }

        svg{
        /* Vai pegar todo espaco da esqueda disponivel e jogar de margem */
        margin-left: auto;
        color:#cbcbd6;
        }
    }



`

export const Title = styled.h1`

    font-size: 48px;
    color: #3a3a3a;
    margin-top:80px;
    max-width:450px;
    line-height:56px ;

`

export const Form = styled.form  <hasError>`

margin-top:40px;
display:flex;
max-width:700px;

input{
    // This is talling the form that the input will take everything of the available space
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;

    border: 2px solid #FFFF ;
    border-right:0;

    &::placeholder{
        color:#a8a8b3;
    }

    ${(props) => props.hasError && css`

        border-color:#c53030;

    `}
} 

button{
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    color: #FFFF;
    font-weight:bold;
    border:0;
    transition: background-color 0.2s;

   &:hover{
       background: ${shade(0.2, '#04D361')};
   }

}

`

export const Error = styled.span`

display: block;
color:#c53030;
margin-top:8px;




`