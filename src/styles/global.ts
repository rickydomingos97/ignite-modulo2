import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-ligh: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;

    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size:  87.5%;
        }
    }

    body {
        background: var(----background);
        -webkit-font-smoothing: antialiased; // para melhorar fonts //
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    height, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`