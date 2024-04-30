import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onFeedback }) => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <div>
      <h2>Expresso Café - Recopilación de opiniones</h2>
      <div>
        <button onClick={() => handleFeedback('good')}>Buena</button>
        <button onClick={() => handleFeedback('neutral')}>Neutra</button>
        <button onClick={() => handleFeedback('bad')}>Mala</button>
      </div>
      <div>
        <p>Opiniones Buenas: {feedback.good}</p>
        <p>Opiniones Neutras: {feedback.neutral}</p>
        <p>Opiniones Malas: {feedback.bad}</p>
      </div>
      {typeof onFeedback === 'function' && onFeedback(feedback)}
    </div>
  );
};

Feedback.propTypes = {
  onFeedback: PropTypes.func
};

export default Feedback;
