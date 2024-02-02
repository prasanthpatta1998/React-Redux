import './App.css';
import CakesCount from './components/CakesCount';
import HooksCakesCount from './components/HooksCakesCount';
import IceCream from './components/IceCream';
import OwnProps from './components/OwnProps';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div className="App">
      {/* <OwnProps cake/>
      <OwnProps/>
      <CakesCount/>
      <HooksCakesCount/>
      <IceCream/> */}
      <UsersContainer/>
    </div>
  );
}

export default App;
