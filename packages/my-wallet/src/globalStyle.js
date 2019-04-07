import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *, *:after, *:before {
        box-sizing: border-box;
    }

    body, button, input {
        margin: 0;
        font-family: helvetica;
        background-color: #ffffff;
        font-size: 14px;
    }
`;

export default GlobalStyle;