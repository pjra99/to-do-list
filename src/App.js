import "./assets/main.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currVal, setCurrVal] = useState("");

  function handleClick() {
    let ar = [...tasks];

    if (currVal !== "") {
      setTasks([
        ...ar,
        {
          id: Math.random(),
          value: currVal,
          completed: false,
        },
      ]);
    }
  }
  function handleInput(e) {
    setCurrVal(e.target.value);
  }

  function Confirmation(forWhat) {
    var Val =
      forWhat === "for deleting"
        ? window.confirm("Are you sure to delete this task?")
        : window.confirm("Are you sure you have completed the task?");
    return Val;
  }
  function handleDel(j) {
    if (Confirmation("for deleting")) {
      let newList = tasks.filter((i) => i.id !== j);
      setTasks(newList);
    }
  }
  function handleDone(k) {
    let ar = [...tasks];
    for (let i = 0; i < tasks.length; i++) {
      if (k === tasks[i].id && ar[i].completed === true) {
        alert("It's already marked Done.");
        return;
      }
    }
    if (Confirmation("for completing a task")) {
      for (let i = 0; i < tasks.length; i++) {
        if (k === tasks[i].id) {
          ar[i].completed = true;
        }
      }
      setTasks(ar);
    }
  }
  const lists = tasks.map((i) => (
    <div
      className="mt-3 pb-1 border-b-2 pb-2"
      style={{
        textDecoration: i.completed ? "line-through" : "",
      }}
      key={Math.random()}
    >
      {i.value}{" "}
      <button
        className="border-2 float-right bg-transparent border-none ml-2"
        onClick={() => handleDel(i.id)}
      >
        <img src="delete_icon.svg" className="w-6" alt="Delete" />
      </button>
      <button
        className="border-2 float-right bg-transparent border-none"
        onClick={() => handleDone(i.id)}
      >
        <img src="done.svg" className="w-5 mt-1" alt="Done" />
      </button>
    </div>
  ));

  return (
    <div className="container-fluid">
      <div className="flex justify-center mt-10 text-xl"> To-do List</div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          className="border-2 w-72"
          placeholder="Add Tasks"
          onChange={(e) => handleInput(e)}
        />{" "}
        <button className="border-2" onClick={handleClick}>
          Add{" "}
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <div className="xl:w-1/4 lg:w-2/5 md:w-80 w-screen md:mx-0 mx-5">
          {lists}
        </div>
      </div>
    </div>
  );
}

export default App;
