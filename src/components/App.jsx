import React, { useState } from 'react';
import { Container, Title, Button } from './App.styled';

const App = () => {
  // Definir el estado para las opiniones recogidas
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  // Función para manejar la retroalimentación
  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <Container>
      <Title>Por Favor deja tu feedback</Title>
      <div>
        <Button onClick={() => handleFeedback('good')}>Buena</Button>
        <Button onClick={() => handleFeedback('neutral')}>Neutra</Button>
        <Button onClick={() => handleFeedback('bad')}>Mala</Button>
      </div>
      <div>
      <Title>Estadisticas</Title>
        <p>Opiniones buenas: {feedback.good}</p>
        <p>Opiniones neutras: {feedback.neutral}</p>
        <p>Opiniones malas: {feedback.bad}</p>
      </div>
      {/* Contenido adicional de la aplicación */}
    </Container>
  );
};

export default App;
