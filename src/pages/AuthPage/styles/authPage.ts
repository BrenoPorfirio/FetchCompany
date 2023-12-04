import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    display: flex;
    flex-direction: column;
    max-width: 640px;

    .homeImageContainer {
      display: flex;
      width: 100%;
      height: 100%;

      background: var(--hub-blue);

      align-items: flex-end;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }

    .hubDescription {
      display: flex;
      flex-direction: column;

      text-align: center;

      background: var(--hub-green);

      padding: 21px 66px 31px 66px;
      gap: 10px;

      strong {
        font: 700 35px "Poppins", sans-serif;
        color: var(--white);
        line-height: 42px;
        margin: 0 50px;
      }

      p {
        font: 400 16px "Poppins", sans-serif;
        line-height: 32px;
        color: #f8f8f8;
      }
    }
  }

  main {
    flex: 8;
    background: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    .mainContent {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      align-items: stretch;
      text-align: center;

      img {
        align-self: center;
        margin-bottom: 33px;
      }
    }
  }

  @media (max-width: 1080px) {
    aside {
      display: none;
    }

    main {
      padding: 0 30px;
    }
  }
`;
