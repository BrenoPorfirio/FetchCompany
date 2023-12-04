import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --white: #fff;
        --hub-green: #00CC99;
        --hub-blue: #0385FD;
        --hub-red: #C90808;
        --hub-gray: #F5F5F5;
        --hub-dark-gray: #EAEAEA;
        --hub-dark-gray-alt: #EFEDED;

        @media (max-width: 1080px){
            html {
                font-size: 93.75%;
            }
        }

        @media (max-width: 720px){
            html {
                font-size: 87.5%;
            }
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--hub-gray);
        color: #29292e;
    }

    body, input, button {
    font: 16px 'Poppins', sans-serif;
    }

    .popper {
      width: 289px;
      background: var(--hub-dark-gray);

      .MuiMenuItem-root {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;

        font-family: "Poppins";
        font-weight: 400;
        font-size: 16px;
        font-style: normal;
        line-height: 20px;

        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;

        &:hover {
            transition: all ease 0.3s;
            background: var(--hub-blue);
            color: var(--white);
        }
      }
    }
`;
