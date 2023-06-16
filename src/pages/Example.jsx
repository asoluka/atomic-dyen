import React, { useEffect, useState } from "react";

export const Example = () => {
  const [disableInput, setDisableInput] = useState(false);

  function handleDisableStateChange() {
    setDisableInput((prev) => !prev);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <>
      <input style={{ color: "black" }} disabled={disableInput} />
      <label>
        <input
          type="checkbox"
          name="inputState"
          onChange={handleDisableStateChange}
        />
        Disable input
      </label>
    </>
  );
};
