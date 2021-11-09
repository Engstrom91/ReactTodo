import Todo from "./components/Todo"

function App() {
  return (
    <div>
      <h1>My Todos</h1>
        <Todo text='Grocery shopping'/>
        <Todo text='Learn Python'/>
        <Todo text='Go to the gym'/>
    </div>
  );
}

export default App;
