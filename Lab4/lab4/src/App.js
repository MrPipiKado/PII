import logo from './logo.svg';
import './App.css';
import {Board} from './Board'
import {Timer} from './Timer'
import {UserForm} from './UserForm'
import {Chart} from './Chart'
import {Image} from './Image'
import {Links} from './Links'


function App() {
  return (
    <>
      <div className="flex-div">
        <Board/>
      </div>
      <div>
        <Timer/>
      </div>
      <div className="flex-div">
        <UserForm/>
      </div>
      <div className="flex-div">
        <Links/>
      </div>
      <div>
        <Chart/>
      </div>
      <div>
        <Image/>
      </div>
      </>
  );
}

export default App;
