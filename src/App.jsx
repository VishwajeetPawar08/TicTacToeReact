import { useState } from 'react';

import './components/styles.scss';
// import Board from './components/Board';

function App() {

  const [counter, setCounter] = useState(1);

  const runn = ()=>{
    setCounter(counter+1);
  }

  return (

    <div className='app'>

      <div>
        <button onClick={runn}>{counter}</button>
      </div>
      {/* <Board></Board> */}
    </div>
  )
}

export default App;
