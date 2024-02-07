/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react';

import './components/styles.scss';
import Board from './components/Board.jsx';

function App() {

  // const [counter, setCounter] = useState(1);

  // const runn = ()=>{
  //   setCounter(counter+1);
  // }

  return (

    <div className='app'>
      <Board/>
    </div>
  )
}

export default App;
