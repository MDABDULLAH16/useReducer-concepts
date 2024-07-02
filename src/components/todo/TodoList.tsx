import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className=" bg-white rounded-lg shadow-md">
      {state.map((item: TTodo) => (
        <p
          onClick={() => dispatch({ type: "taskCompleted", payload: item.id })}
          key={item.id}
          className={`text-yellow-500 text-3xl text-center cursor-pointer ${
            !item.isCompleted ? "line-through" : ""
          }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
