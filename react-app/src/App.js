import { useState } from 'react';
import './style/listStyle.css'
// import lodash from 'lodash';
import list from './listOfQuestions';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(list);
  const handleStatusChange = (id) => {
    const updatedQuestions = questions.map((el) => {
      if (el.id === id) {
        return { ...el, state: !el.state };
      }
      return el;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className="App">
      <h1 className="title">
          List of questions
        </h1>

        {questions.map((el, index) => {
          const listIndex = (index + 1);
          const stateSpan = el.state ? 'icon-text has-text-success' : 'icon-text has-text-danger';
          const stateIcon = el.state ? 'fas fa-check-square' : 'fas fa-ban';
          const stateText = el.state ? 'Разобрался' : 'Не разобрался';
          console.log();
          return <div className="card p-5 mt-3 has-text-link has-background-white">
                      {listIndex}. {el.question}
                        <span className={stateSpan}>
                          <span className="icon">
                            <i className={stateIcon}></i>
                          </span>
                          <span className="state">{stateText}</span>
                        </span>
                        <div className="buttons mt-3">
                          <button 
                            className="button is-link is-outlined"
                            onClick={() => handleStatusChange(el.id)}
                          >Изменить статус</button>
                        </div>
                  </div>
        })}
    </div>
  );
}

export default App;
