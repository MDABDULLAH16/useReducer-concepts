import "./App.css";
import CounterWithFunction from "./components/CounterWithFunction";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";
import UserInfoWithUseState from "./components/UserInfoWithUseState";
import CounterWithClass from "./components/counterWithClass";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="space-x-4   text-center my-auto ">
        {/* <CounterWithClass></CounterWithClass>
      <CounterWithFunction /> */}
        {/* <UserInfoWithUseState /> */}
        {/* <UserInfoWithUseReducer /> */}
        <TodoForm />
      </div>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
