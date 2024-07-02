// @ts-ignore
import React, { useState } from "react";
interface TUser {
  name: string;
  age: string;
  hobbies: string[];
}

const UserInfoWithUseState = () => {
  const [user, setUser] = useState<TUser>({ name: "", age: "0", hobbies: [] });
  console.log(user);

  return (
    <div>
      <form className="flex items-center flex-col gap-5 mt-8 justify-between">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="border"
          type="number"
          name="age"
          id="age"
          placeholder="Age"
        />
        <input
          onChange={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
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

export default UserInfoWithUseState;
