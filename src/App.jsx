import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';

const App = () => {
  const [count, setCount] = useState (0);
  const handleIncrement = () => 
    setCount(prev => prev + 1);
    const handleDecrement = () => 
      setCount(prev => prev - 1);
      const handleReset = () => 
        setCount(0);


        return(
          <div className= "app-container">
            <div className= "counter-card">
              <h1>Counter</h1>
              <p className="count-display">{count}</p>
              <ButtonGroup handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset} />
            </div>
          </div>
        );
    };
export default App;

