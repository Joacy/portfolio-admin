import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoRegister = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    position: fixed;
    top: 0;
    right: 15px;
    z-index: 10;
    text-decoration: none;
    
    svg {
        color: #ecf0ff;
        font-size: 20px;
    }
`;

export const Projects = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    padding: 50px 15px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 991px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Project = styled.div`
    border: 2px solid #ecf0ff;
    border-radius: 4px;
    color: #ecf0ff;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .bottom {
        padding: 15px;
    }
`;
