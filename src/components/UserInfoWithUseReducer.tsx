//@ts-ignore
import React, { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};
const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-5 mt-8 justify-between"
      >
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          className="border"
          type="number"
          name="age"
          id="age"
          placeholder="Age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
          className="border"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="Hobbies"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoWithUseReducer;
