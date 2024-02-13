import './App.css';
import BreakingBadText from './components/breaking-bad-text';
import NameInputs from './components/name-inputs';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BreakingBadText />
        <NameInputs />
      </div>
    </Provider>
  );
}

export default App;
