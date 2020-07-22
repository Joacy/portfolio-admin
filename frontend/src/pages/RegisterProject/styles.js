import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoHome = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    position: fixed;
    top: 0;
    left: 15px;
    z-index: 10;
    text-decoration: none;
    
    svg {
        color: #ecf0ff;
        font-size: 20px;
    }
`;

export const RowForm = styled.form`
    display: flex;
    padding: 50px 15px;
    height: calc(100vh - 45px - 65px);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .col + .col {
        margin-left: 25px;
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        background: transparent;
        border-radius: 4px;
        border: 2px solid #ecf0ff;
        color: #ecf0ff;
        font-size: 14px;
        font-family: "Oxygen", sans-serif;
    }
    
    input::placeholder, textarea::placeholder{
        color: #ecf0ff;
        font-size: 14px;
        font-family: "Oxygen", sans-serif;
    }
    
    input + input, input + textarea, textarea + input {
        margin-top: 15px;
    }

    button {
        width: 100%;
        padding: 10px;
        margin-top: 15px;
        background: #003554;
        border-radius: 4px;
        border: 2px solid #ecf0ff;
        color: #ecf0ff;
        font-size: 14px;
        font-family: "Oxygen", sans-serif;
        cursor: pointer;
    }

    button:hover {
        background: #ecf0ff;
        color: #051923;
        transition: 0.3s;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        height: auto;

        .col + .col {
            margin-left: 0;
            margin-top: 25px;
        }
    } 
`;