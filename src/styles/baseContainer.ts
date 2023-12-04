import styled from "styled-components";

export const BaseContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .goBack {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    cursor: pointer;

    position: absolute;
    left: 25px;
    top: 100px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;

    color: #4d4d4d;

    img {
      max-width: 24px;
    }

    &:hover {
      transition: all 0.3s;
      opacity: 0.8;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    font-family: "Poppins";
    font-style: normal;

    button {
      width: fit-content;
      align-self: center;

      cursor: pointer;

      padding: 15px 44px;
      margin-top: 35px;

      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      text-align: center;

      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      background: var(--hub-blue);
      color: #ffffff;

      &:hover {
        transition: all ease 0.3s;
        opacity: 0.8;
      }
    }

    h1 {
      max-width: 600px;

      font-weight: 700;
      font-size: 60px;
      line-height: 65px;
      text-align: center;

      color: #000000;
    }
  }
`;
