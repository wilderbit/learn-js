## The Basics
- Babel is a JavaScript compiler

#### Why React?
- A JS library for building user interfaces
- Almost gives the virtual browser (vs. DOM API)
- Just JavaScript
- Declarative Language(model UI and state)

#### React Basics
- Components
  - Like Functions
  - Input: props, state | Output: UI
  - Reusable and composable
  - <Component></Component>
  - Can manage private state
  - Function Component and Class Component  
    
- Reactive Updates
  - Take updates to the browser

- Virtual views in memory
  - Generate HTML using JavaScript
  - No HTML template language
  - Tree reconciliation
  
Basic Links
-----------
https://jscomplete.com/playground/rgs1.1
https://jscomplete.com/playground/rgs1.2
https://jscomplete.com/playground/rgs1.3

#### useState
useState() result: 

a) state object (getter)

b) updated function (setter)

```jsx
function Hello() {
  const [counter, setCounter] = useState(0)
	return <div>
    <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    <button onClick={() => setCounter(counter * 2)}>{counter}</button>
	</div>;
}
ReactDOM.render(
  <Hello />, 
  document.getElementById('mountNode'),
);
```

React.Fragment is just a works as `div` but it will not create any new parent.

Component Improvement

```jsx
function Button(props) {
	return <button onClick={props.onClickHandler}> +1 </button>;
}

function Display(props) {
  return <div>{props.message}</div>
}

function App(props) {
  const [counter, setCounter] = useState(0);
  return <div>
    <Button onClickHandler={() => setCounter(counter + 1)}/>
    <Display message={counter} />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
```