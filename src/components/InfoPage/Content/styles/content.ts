import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    overflow: hidden;
    
    .text-container,
    .icon-container {
    width: 200px; /* ou o valor desejado */
    height: 200px; /* ou o valor desejado */
}

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
        flex-direction: column;
        background-color: var(--hub-blue);
        padding: 20px;
        text-align: center;
        align-items: center;
        justify-content: space-between;
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

export const StartNowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--hub-blue);
    color: white;
    font-weight: bold;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, background 0.3s, color 0.3s;
    
    :hover {
        transform: scale(1.1);
    }
`