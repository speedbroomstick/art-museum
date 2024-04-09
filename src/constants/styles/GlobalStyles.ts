import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url("assets/fonts/Inter.ttf") format("ttf");
    }
    @font-face {
        font-family: "Lexend";
        src: url("assets/fonts/Lexend.ttf") format("ttf");
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        background-color: rgb(250,250,250);
    }
`;
