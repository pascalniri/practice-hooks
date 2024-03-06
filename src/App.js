import React, { useState } from 'react';

const QuestionComponent = () => {
  const [questionVisible, setQuestionVisible] = useState(false);
  const [answer, setAnswer] = useState();
  const [alertMessage, setAlertMessage] = useState('');

  const handleOpenQuestion = () => {
    setQuestionVisible(true);

    setTimeout(() => {
      setQuestionVisible(false);
    }, 20000);
  };

  const handleSubmit = () => {

    if (parseInt(answer) !== 2000000) {
      setAlertMessage('Wrong Answer');
    } else {
      setAlertMessage('Correct Answer');
    }
    setAnswer('');
   
  };

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className='container'>
      <div className='subcontainer'>
        <h1>ATTENTION:</h1>
        <p>The Question lasts for two minutes, and then it closes</p>
      </div>
      <button id='open-btn' onClick={handleOpenQuestion}>Open Question</button>
      {questionVisible && (
        <div>
          <h2>What answer do we get when we multiply 1000 by 2000?</h2>
          <div className='question-field'>
            <input
              type="number"
              placeholder='Answer'
              value={answer}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>SUBMIT</button>
          </div>
          {alertMessage && (
            <div className='alert'>
              {alertMessage}
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
