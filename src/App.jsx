import { useState, useEffect } from 'react';
import './App.css'

function App() {


const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(()=>{
      setTime(new Date());
    }, 1000); // update every 1 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);


  return (
    <>
        <h1>{time.toDateString()}</h1>
        <h1>{time.toLocaleTimeString()}</h1>
    </>
  )
}

export default App
