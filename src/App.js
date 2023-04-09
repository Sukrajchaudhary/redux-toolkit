import { useSelector } from 'react-redux';

import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
// import Formdata from './components/Formdata';
// import Showdata from './components/Showdata';
import Admin from './components/Admin';
function App() {
  const amount= useSelector(state=>state.account.amount);
  const points=useSelector(state=>state.bonus.points)
 
  return (
    <>
     <div className="App">
     {/* <Formdata  ></Formdata>
     <Showdata></Showdata> */}
     <Admin></Admin>
     <p>App:</p>
      <p>Current Amounts:{amount}</p>
      <p>Total Bonus:{points}</p>
     
      <Account></Account>
      <Bonus></Bonus>
      </div>
    </>
  );
}

export default App;
