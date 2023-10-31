import React, { createContext, useContext, useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

interface Props {
    children: React.ReactNode;
  }

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (text.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const taskContextValue: TaskContextType = {
    tasks,
    addTask,
    completeTask,
    deleteTask,
  };

  return <TaskContext.Provider value={taskContextValue}>{children}</TaskContext.Provider>;
};