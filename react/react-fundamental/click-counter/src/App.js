import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div onClick={props.onClick}>
      This is div has been clicked {props.clicks} times.
    </div>
  );
}

export default App;
