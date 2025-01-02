import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const App = () => {
  const [tasks, setTask] = useState([]);

  const taskRef = useRef();

  const addNewTask = () => {
    if (taskRef.current.value !== "") {
      setTask([...tasks, { id: Date.now(), text: taskRef.current.value }]);
    }
    taskRef.current.value = "";
  };

  const removeTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5 font-mono">
      <div className="grid gap-5 grid-cols-3 grid-rows-3">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -50 }}
              layout
              className="flex justify-center items-center p-5 flex-col gap-10 rounded-md border-2 min-w-40"
            >
              <p className="text-3xl">{task.text}</p>
              <Button variant="outline" onClick={() => removeTask(task.id)}>
                Done
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div>
        <div className="flex gap-5">
          <Input ref={taskRef} placeholder="Task" />
          <Button onClick={addNewTask}>Add Task</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
