import styled from 'styled-components';

export const StatisticsSection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  min-width: 279px; 
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  gap:5px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || '#ffffff'}; /* Asigna un color de fondo personalizable */
`;

export const Label = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.5);
`;

export const Percentage = styled.span`
  color: #FFF8DC;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 5px;
`;
