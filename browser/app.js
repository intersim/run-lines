import { Provider } from 'react-redux';
import Routes from './react-redux/Routes';

const App = props => (<Provider store={store}>
	  <Routes />
  </Provider>)

export default App;