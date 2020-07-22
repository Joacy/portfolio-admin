import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body, #root {
        height: 100%;
    }
    
    body {
        width: 100%;
        height: 100%;
        background: #003554;
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }
    
    h2 {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 35px;
    }

    ul {
        list-style: none;
    }
`;