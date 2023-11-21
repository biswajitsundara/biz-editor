import './App.css';
import Header from './header/Header';
import Body from './body/body';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
