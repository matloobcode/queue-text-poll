
import React, { useState } from 'react';
import { View } from '../view/view';
import { FinalView } from '../final-view/final-view'
import { Header } from '../header/header';
import './input.css';

export function AppInput() {
  const [textInput, setTextInput] = useState('');
  const [textQueue, setTextQueue] = useState([]);

  function addText() {
    if (textInput.trim() !== '') {
      setTextQueue((prevQueue) => [...prevQueue, textInput]);
      setTextInput('');
    }
  };

  function pushToQueue() {
    if (textQueue.length > 0) {
      const currentText = textQueue.shift();
      setTextQueue([...textQueue]);
    }
  };

  function resetApp() {
    setTextQueue([]);
    alert('Success! Queue is empty.');
  };

  return (
    <div className='container-fluid app'>
      <Header />

<div className='row '>
<div className='col-6 '>
       <div className='widhHeight bg-success'>
       <h2>Section 1 - Add Text</h2>
       <div className='d-flex justify-content-center mt-5'>
       <input type='text' className='form-control w-50' value={textInput} onChange={(e) => setTextInput(e.target.value)} />
        <button className='btn btn-info ms-2' onClick={addText}>Add</button>
       </div>
       </div>

        <div className='widhHeight bg-info'>
      <View textQueue={textQueue} />
      </div>

      </div>

     

      <div className='col-6 resetbtn'>
      <FinalView textQueue={textQueue} pushToQueue={pushToQueue} />

      <div className="">
      <button className='btn btn-outline-info fw-bold bstyle' onClick={resetApp}>Reset</button>

      </div>
      </div>
</div>
    </div>
  );
};
