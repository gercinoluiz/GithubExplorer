import { createGlobalStyle } from "styled-components";

import githubBackGround from "../assets/github-background.svg"


export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body{
        background:#F0F0F5 url(${githubBackGround}) no-repeat 70% top;
        -webkit-font-smoothing: intialiased
    }

    body, input, button {
        font: 16px, Roboto, sans-serif;
    }

    #root{
        /* We never pass a fixed property when working with responsivite */
        max-width:960px;
        /* 0 top and bottom and auto left and right   */
        margin: 0 auto; 
        /* The 20 left and right is in order to not touch the extrimity while in mobile */
        padding: 40px 20px 

    }

    button{
        cursor: pointer;
    }

`