import styled from "styled-components";

interface CustomInputContainer {
  error?: boolean;
}

export const CustomInputContainer = styled.div<CustomInputContainer>`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    align-self: flex-start;

    color: #373737;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  input {
    border: none;
    width: 100%;
    height: 60px;
    border: ${(props) => (props.error ? "2px solid red" : "2px solid #0385fd")};
    border-radius: 5px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    padding: 0 16px;
  }

  span {
    display: flex;
    justify-self: flex-start;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: red;
  }
`;
