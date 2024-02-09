
import React, { useEffect, useState } from 'react';
import './final-view.css';

export function FinalView({ textQueue, pushToQueue }){
  const [stopInterval, setStopInterval] = useState(null);

  function endInterval(){
    clearInterval(stopInterval);
    setStopInterval(null);
    alert('Success..');
  }


  useEffect(() => {
    const interval = setInterval(() => {
      pushToQueue();
    }, 10000);

    return () => clearInterval(interval);
  }, [pushToQueue]);

  return (
    <div className='fViewWh bg-secondary text-white p-4 fs-4'>
      <h2 className='text-center'>Section 3 - Poll every 10 seconds</h2>
      <div className='h3 text-info mt-5 '>{textQueue.length > 0 ? `Polled Text: ${textQueue[0]}` : 'Queue is empty'}</div>
      <button onClick={endInterval} className='btn btn-outline-info fw-bold btnEnd'>End</button>
    </div>
  );
};
