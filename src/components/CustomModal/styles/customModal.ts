import styled from "styled-components";

interface CustomModalContainerProps {
  mode: string;
}

export const CustomModalContainer = styled.form<CustomModalContainerProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .contentContainer {
    max-width: 1000px;
    margin: 0 1rem;
    width: 100%;
    height: fit-content;
    max-height: 890.15px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .description {
      padding: 20px 30px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      /* or 150% */

      color: #000000;
    }

    .modalHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 18px 15px 35px;
      background: ${(props) =>
        props.mode === "create" || props.mode === "edit"
          ? "var(--hub-blue)"
          : "var(--hub-red)"};
      border-radius: 10px 10px 0px 0px;

      svg {
        color: var(--white);
      }

      p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;

        text-align: center;

        color: #ffffff;
      }

      .modalCloseButton {
        transition: 0.15s ease;
        &:hover {
          background-color: #ffffff;

          svg {
            color: ${(props) =>
              props.mode === "create" || props.mode === "edit"
                ? "var(--hub-blue)"
                : "var(--hub-red)"};
          }
        }
      }
    }

    .modalFooter {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px 15px 15px 15px;

      button {
        padding: 8px 24px;
        border-radius: 6px;

        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        text-align: center;

        color: #ffffff;
        text-transform: none !important;
      }

      .submitModal {
        background: ${(props) =>
          props.mode === "create" || props.mode === "edit"
            ? "var(--hub-blue)"
            : "var(--hub-red)"};
        color: var(--white);

        &:hover {
          background: ${(props) =>
            props.mode === "create" || props.mode === "edit"
              ? "#ecf8ff"
              : "#FFF5F8"};

          p {
            color: ${(props) =>
              props.mode === "create" || props.mode === "edit"
                ? "var(--hub-blue)"
                : "var(--hub-red)"};
          }
        }
      }
    }
  }
`;
