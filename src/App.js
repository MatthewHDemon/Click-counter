import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/logoFreecodecamp.png'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handlingClick = () => {
    setNumClicks(numClicks +1);
  }

  const restartingCounter = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='freecodecamo-logo-container'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt="freeCodeCamp's logo" />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button
          texto='Clic'
          esClickButton={true}
          handlingClick={handlingClick} />
        <Button
          texto='reiniciar'
          esClickButton={false}
          handlingClick={restartingCounter} />
      </div>
    </div>
  );
}

export default App;
