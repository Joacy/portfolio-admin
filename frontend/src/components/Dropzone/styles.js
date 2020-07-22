import styled from 'styled-components';

export const Zone = styled.div`
    height: 300px;
    width: 100%;
    background: #ecf0ff;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        width: calc(100% - 25px);
        height: calc(100% - 25px);
        
        padding: 10px;

        border-radius: 4px;
        border: 1px dashed #051923;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #051923;

        font-size: 14px;

        svg {
            color: #051923;
            margin-bottom: 8px;
        }
    }
`;
