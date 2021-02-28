import './App.css';
import Login from './components/Login';
import SigninContext from './context/sign-in';

function App() {
  return (
    <SigninContext>
      <Login />
    </SigninContext>
  );
}

export default App;
