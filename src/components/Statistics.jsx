import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const backgroundColor = generateColor(id); // Generar un color único para cada StatItem basado en el ID
          return (
            <StatItem key={id} backgroundColor={backgroundColor}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Función para generar un color único basado en un identificador único
const generateColor = (id) => {
    // Convertir el ID en un número entero
    const idNumber = parseInt(id.replace(/[^a-zA-Z0-9]/g, ''), 36);
    const green = (idNumber * 3) % 100 + 100; // Ajustar el valor base para obtener tonos más claros
    const blue = (idNumber * 15) % 100 + 100;
    return `rgb(0, ${green}, ${blue})`;
  };

export default Statistics;
