import React, { useRef, useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const App = () => {
  const [tasks, setTask] = useState([]);

  const taskRef = useRef();

  const addNewTask = () => {
    if (taskRef.current.value != "") {
      setTask([...tasks, { id: Date.now(), name: taskRef.current.value }]);
    }
    taskRef.current.value = "";
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5 font-mono">
      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        <div className="flex justify-center items-center p-5 flex-col gap-10 rounded-md border-2 min-w-40">
          <p className="text-3xl">Hehe</p>
          <Button variant="outline">Done</Button>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <Input ref={taskRef} placeholder="Task" />
        <Button onClick={addNewTask}>Add Task</Button>
      </div>
    </div>
  );
};

export default App;
