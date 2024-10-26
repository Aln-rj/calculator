import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleButton = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setShowResult(true);
      } catch (error) {
        setResult('Error');
        setShowResult(true);
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
      setShowResult(false);
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
      setShowResult(false);
    } else {
      setInput((prev) => prev + value);
      setShowResult(false);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          {showResult && <div className="result">{result}</div>}
        </div>

        <div className="buttons">
          <button onClick={() => handleButton('C')} className="clear">C</button>
          <button onClick={() => handleButton('⌫')} className="backspace">⌫</button>
          <button onClick={() => handleButton('%')} className="operator">%</button>
          <button onClick={() => handleButton('/')} className="operator">÷</button>

          <button onClick={() => handleButton('7')}>7</button>
          <button onClick={() => handleButton('8')}>8</button>
          <button onClick={() => handleButton('9')}>9</button>
          <button onClick={() => handleButton('*')} className="operator">×</button>

          <button onClick={() => handleButton('4')}>4</button>
          <button onClick={() => handleButton('5')}>5</button>
          <button onClick={() => handleButton('6')}>6</button>
          <button onClick={() => handleButton('-')} className="operator">-</button>

          <button onClick={() => handleButton('1')}>1</button>
          <button onClick={() => handleButton('2')}>2</button>
          <button onClick={() => handleButton('3')}>3</button>
          <button onClick={() => handleButton('+')} className="operator">+</button>

          <button onClick={() => handleButton('0')} className="zero">0</button>
          <button onClick={() => handleButton('.')}>.</button>
          <button onClick={() => handleButton('=')} className="equals">=</button>
        </div>
      </div>
    </div>
  )
}

export default App