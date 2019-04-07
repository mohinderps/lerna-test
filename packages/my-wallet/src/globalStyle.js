import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *:after, *:before {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body, button, input {
        margin: 0;
        background-color: #ffffff;
        font-size: 14px;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export default GlobalStyle;