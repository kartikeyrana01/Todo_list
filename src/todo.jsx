import { useState } from "react";

export default function Todo() {
  let [input, setInput] = useState("");
  let [Tasks, setTasks] = useState(["sleep"]);

  let addTask = () => {
    if (input.trim() !== "") {
      setTasks([...Tasks, input]);
      setInput("");
    }
  };

  let deleteTask = (index) => {
     let tasksCopy = [...Tasks];  
  tasksCopy.splice(index, 1); 
  setTasks(tasksCopy); 
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
            My Todo List
          </h1>

          <div className="flex mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow border border-gray-300 rounded-l-lg px-5 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
            />
            <button
              onClick={addTask}
              className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-pink-600 transform hover:scale-105 transition"
            >
              Add
            </button>
          </div>

          <ul>
            {Tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-pink-50 rounded-lg shadow-md px-5 py-3 mb-3 hover:shadow-lg transition"
              >
                <span className="text-gray-700 font-medium">{task}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-pink-600 hover:text-pink-800 font-semibold hover:scale-110 transform transition"
                  aria-label={`Delete task ${task}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
