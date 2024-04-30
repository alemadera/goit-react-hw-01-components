import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  min-width: 279px; 
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  color: #666;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: #666;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Quantity = styled.span`
  color: #333;
`;
