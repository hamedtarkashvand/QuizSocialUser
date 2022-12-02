import './App.css';
import RoutesApp from './routes';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
  
      <div className="App">
        <Provider store={store}>
          <RoutesApp/>
        </Provider>
      </div>

  ); 
}


export default App;
