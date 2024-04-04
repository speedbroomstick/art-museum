import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url("assets/fonts/Inter.ttf");
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: rgb(250,250,250);
    }
`;
