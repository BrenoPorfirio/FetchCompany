import styled from "styled-components";

export const CustomTableContainer = styled.div`
  width: 100%;
  margin: 0 35px;
  font-family: "Poppins";
  font-style: normal;
  position: relative;

  color: #000000;

  .noTableMode {
    display: flex;
    align-items: center;
  }

  .tableAdd {
    position: absolute;
    right: 0;
    top: -100px;

    button {
      padding: 12px 30px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;

      text-align: center;
    }
  }

  .actionsRow {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .MuiButtonBase-root {
      min-width: 0px;
    }
    button {
      margin: 0;
      padding: 0;
      background: transparent;
      box-shadow: none;
    }
  }

  .MuiTableCell-head {
    padding: 14px 16px 14px 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
  }

  .MuiTableCell-body {
    padding: 14px 16px 14px 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    color: #000000;
  }
`;
