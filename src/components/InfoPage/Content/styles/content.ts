import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    overflow: hidden;

    .content-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 91.5vh;
        padding: 20px;
    }

    .text-container {
        border-radius: 8px;
        background-color: var(--hub-blue);
        padding: 20px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        min-height: 150px;
        width: 30%;
        margin: 10px;
        font-weight: bold;
        color: white;
        transition: transform 0.2s, background 0.3s, color 0.3s;
    }

    .text-container:hover {
        background: var(--hub-blue);
        color: white; 
        cursor: none;
        transform: scale(1.1);
    }
`;
