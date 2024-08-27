// import React, { useState } from 'react';
// import Timer from './components/TimerCard';
// import './App.css';

// function App() {
//   const [timers, setTimers] = useState([]);
//   const [seconds, setSeconds] = useState('');

//   const addTimer = () => {
//     if (seconds && !isNaN(seconds)) {
//       const newTimer = {
//         id: Date.now(),
//         seconds: parseFloat(seconds),
//         createdAt: new Date().toLocaleString(),
//       };
//       setTimers([newTimer, ...timers]);
//       setSeconds('');
//     }
//   };

//   const deleteTimer = (id) => {
//     setTimers(timers.filter(timer => timer.id !== id));
//   };

//   const isInputValid = seconds && !isNaN(seconds);

//   onkeydown = (e) => {
//     if (e.key === 'Enter') {
//       addTimer();
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-panel hide-scrollbar">
//         {timers.length > 0 ? timers.map(timer => (
//           <Timer
//             key={timer.id}
//             id={timer.id}
//             seconds={timer.seconds}
//             createdAt={timer.createdAt}
//             onDelete={deleteTimer}
//           />
//         )) : (<p className='sub-heading'>No timer, create new timer</p>)}
//       </div>
//       <div className="right-panel">
//         <h2>Add New Timer</h2>
//         <div className='input-container'>
//           <input
//             type="number"
//             value={seconds}
//             onChange={(e) => setSeconds(e.target.value)}
//             placeholder="Enter seconds"
//             className='input-field'
//           />
//           <button className='button'  disabled={!isInputValid} onClick={addTimer}>Add Timer</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Timer from './components/TimerCard';
import './App.css';

function App() {
  const [timers, setTimers] = useState([]);
  const [seconds, setSeconds] = useState('');

  const addTimer = () => {
    if (seconds && !isNaN(seconds)) {
      const newTimer = {
        id: Date.now(),
        seconds: parseFloat(seconds),
        createdAt: new Date().toLocaleString(),
      };
      setTimers([newTimer, ...timers]);
      setSeconds('');
    }
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  const isInputValid = seconds && !isNaN(seconds);

    onkeydown = (e) => {
    if (e.key === 'Enter') {
      addTimer();
    }
  };

  return (
    <div className="container">
      <div className="left-panel hide-scrollbar">
        {timers.map(timer => (
          <Timer
            key={timer.id}
            id={timer.id}
            seconds={timer.seconds}
            createdAt={timer.createdAt}
            onDelete={deleteTimer}
          />
        ))}
      </div>
      <div className="right-panel">
        <h2 className="heading">New timer</h2>
        <div className="input-container">
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="Enter seconds"
            className="input-field"
          />
          <button
            className="add-button"
            onClick={addTimer}
            disabled={!isInputValid}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

