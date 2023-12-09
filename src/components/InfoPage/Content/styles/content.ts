import styled from "styled-components";

export const Container = styled.div`
    background-color: white;

    
    .text-container,
    .icon-container {
    width: 200px; 
    height: 200px; 
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

        @media (max-width: 1080px) {
        min-height: 20vw; 
        width: 85%;
    }   

        @media (max-width: 720px) {
            min-height: 30vw; 
            width: 100%;
        }

        .start-now-container {
            margin-top: 20px; /* ou o valor desejado */
            width: 100%;
            display: flex;
            text-align: center;
            justify-content: center;
    }

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
    padding: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    position: relative; 
    transition: transform 0.2s, background 0.3s, color 0.3s;
   
    ::after{
        content: ' ';
        position: absolute;
        left: 5px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 30px;
    }
    :hover::after{
        content: '>'; 
        opacity: 1;
    }

    ::before {
        content: ' ';
        position: absolute;
        right: 5px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 30px;
    }

    :hover::before {
        content: '<'; 
        opacity: 1;
    }

    :hover {
        transform: scale(1.1);
    }
`;