import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;  
  list-style-type: none;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
  min-width: 279px;
  width: 90%;
  margin: 0;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 60%;
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  border-radius: 10px;
  
  &:hover {
    background-color: #eaeaea; 
  }

  &:focus {
    outline: none; 
    background-color: #cce5ff; 
  }
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0;
`;
