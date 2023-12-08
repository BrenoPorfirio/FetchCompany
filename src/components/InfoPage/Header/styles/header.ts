import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: var(--hub-blue);
  background-color: var(--hub-green);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid white;
  

  .left-content {
    background-color: lightgray;
    padding: 8px; 
    border-radius: 8px;
  }

  .right-content {
    display: flex;
    align-items: center;

    a {
      background-color: lightgray; 
      margin-left: 10px; 
      text-decoration: none;
      color: var(--hub-blue);
      padding: 8px; 
      border-radius: 8px;
    }
    a:hover {
      background: var(--hub-blue);
      color: white; 
      
    }
  }
`;
