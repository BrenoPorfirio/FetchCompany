import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  position: relative;

  .header {
    position: fixed;
    display: flex;
    height: fit-content;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    font-family: "Poppins";
    font-style: normal;

    background: var(--white);
    color: #000000;

    .headerDescription {
      display: flex;
      align-items: center;
      max-width: 350px;

      font-weight: 700;
      font-size: 30px;
      line-height: 20px;

      padding: 30px 0;
      margin-left: 30px;
      gap: 10px;

      p {
        white-space: nowrap;
        overflow-x: clip;
        text-overflow: ellipsis;
      }
    }

    .userMenu {
      height: 100%;
      min-width: 289px;
      max-width: 289px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;

      gap: 40px;
      padding: 15.5px 25px 15.5px 35px;

      font-weight: 600;
      font-size: 20px;
      line-height: 20px;

      background: var(--hub-dark-grey);

      p {
        max-width: 100px;
        white-space: nowrap;
        overflow-x: clip;
        text-overflow: ellipsis;
      }

      .MuiAvatar-root {
        border: 1px solid var(--hub-blue);
      }

      .userInfos {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  @media (max-width: 720px) {
    .header {
      .headerDescription {
        max-width: 30px;
      }
    }
  }
`;
