import styled from "styled-components"


export const Header = styled.header`

    display:flex;
    justify-content:space-between;
    align-items:center;

    a{
        display:flex;
        align-items:center;
        text-decoration:none;
        color:#a8a8b3;
        transition:color 0.2s;

        &:hover{
            color:#666;
        }

        svg{
            margin-right:4px;
        }
    }


`


export const RepositoryInfo = styled.section`

margin-top:80px;

header{

    display:flex;
    align-items:center; 

    img {
    width: 120px;
    height:120px;
    border-radius:50%;
  }

  div{
      margin-left:24px;
      strong{
          font-size: 36px;
          color:#3d3d4d;

      }

      p{
          font-size:18px;
          color:#737380;
          margin-top: 4px;
      }
  }

}



ul{
    display:flex;
    list-style:none;
    margin-top:40px;


}

li{

    &  + li {
        margin-left:80px;
    }
    strong{
        display:block;
        font-size: 36px;
        color:#3d3d4d;
    }

    span{
        display:block;
        color:#6c6c80;
        margin-top:4px;
    }
}

`


export const Issues = styled.div`



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