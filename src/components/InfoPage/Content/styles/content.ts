import styled from "styled-components";

export const Container = styled.div`
    .content-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh; 
}

.text-container {
    padding: 20px;
    border: 1px solid #ccc;
    text-align: center;
    width: 30%; 
}

#text1 {
    background-color: #ffd700; 
}

#text2 {
    background-color: #87ceeb; 
}

#text3 {
    background-color: #90ee90; 
}
`