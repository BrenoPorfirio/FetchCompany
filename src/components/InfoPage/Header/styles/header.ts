import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: var(--hub-blue);
  background-color: var(--hub-blue);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%; 

  .left-content {
    background-color: white;
    padding: 8px; 
    border-radius: 8px;
  }

  .right-content {
    display: flex;
    align-items: center;

    a {
      background-color: white; 
      margin-left: 10px; 
      text-decoration: none;
      color: var(--hub-blue);
      padding: 8px; 
      border-radius: 8px;
    }
    a:hover {
      background: var(--hub-blue);
      color: white; 
      border: 1px solid white;
    }
  }
`;
