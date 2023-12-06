import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--hub-blue); 

    .content-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 91.6vh;
    }

    .text-container {
        border-radius: 8px;
        padding: 20px;
        border: 1px solid #ccc;
        text-align: center;
        width: 30%;
    }
`;
