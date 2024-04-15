import Signin from './Signin';
import Signup from './Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
    </Router>
  );
}

export default App;
