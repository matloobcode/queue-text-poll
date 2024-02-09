// import React, { useState } from 'react';

// function QueueComponent() {
//   const [inputText, setInputText] = useState('');
//   const [queue, setQueue] = useState([]);

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleAddButtonClick = () => {
//     if (inputText.trim() !== '') {
//       setQueue([...queue, inputText]);
//       setInputText('');
//     }
//   };

//   const handleRemoveButtonClick = () => {
//     if (queue.length > 0) {
//       const updatedQueue = [...queue];
//       updatedQueue.shift(); // Remove the first element from the queue
//       setQueue(updatedQueue);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={inputText}
//           onChange={handleInputChange}
//           placeholder="Enter text"
//         />
//         <button onClick={handleAddButtonClick}>Add</button>
//       </div>
//       <div>
//         <h2>Queue:</h2>
//         <ul>
//           {queue.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//         {queue.length > 0 && (
//           <button onClick={handleRemoveButtonClick}>Remove</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default QueueComponent;




import React, { useState, useEffect } from 'react';

const Check = () => {
  const [textInput, setTextInput] = useState('');
  const [textQueue, setTextQueue] = useState([]);
  const [pollResult, setPollResult] = useState('');

  const addText = () => {
    if (textInput.trim() !== '') {
      setTextQueue((prevQueue) => [...prevQueue, textInput]);
      setTextInput('');
    }
  };

  const pushToQueue = () => {
    if (textQueue.length > 0) {
      const currentText = textQueue.shift();
      setPollResult(`PolledText: ${currentText}`);
      setTextQueue([...textQueue]);
    } else {
      setPollResult('Queue is empty');
    }
  };

  const resetApp = () => {
    setTextQueue([]);
    setPollResult('');
    alert('Success! Queue is empty.');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      pushToQueue();
    }, 10000);

    return () => clearInterval(interval);
  }, [pushToQueue]);

  return (
    <div>
      <div>
        <h2>Section 1 - Add Text</h2>
        <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)} />
        <button onClick={addText}>Push to Queue</button>
      </div>

      <div>
        <h2>Section 2 - Queue Status</h2>
        <ul>
          {textQueue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Section 3 - Poll every 10 seconds</h2>
        <div>{pollResult}</div>
      </div>

      <button onClick={resetApp}>Reset</button>
    </div>
  );
};

export default Check;