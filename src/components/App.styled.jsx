// App.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
