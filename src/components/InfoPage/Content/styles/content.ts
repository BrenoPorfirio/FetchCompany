import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--hub-green); 

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
        background-color: lightgray;
        padding: 20px;
        text-align: center;
        width: 30%;
        margin: 10px; 
        font-size: 16px;
        font-weight: bold;
        color: var(--hub-blue); 
    }
`;