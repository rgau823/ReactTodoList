import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from "@mui/material"

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("tasks"))
  if (!data) return [];
  return data;
}


export default function TodoList() {
  const [tasks, setTasks] = useState(getInitialData());
  useEffect(() => {
    localStorage.setItem(
      'tasks', JSON.stringify(tasks)
    )
  }, [tasks])

  const removeTodo = (id) => {
    setTasks(prevTasks => {
      console.log(prevTasks)
      return prevTasks.filter(t => t.id !== id);
    })
  }

  const toggleTodo = (id) => {
    setTasks(prevTasks => {
      return prevTasks.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      })
    })
  }

  const addTodo = (text) => {
    console.log(text)
    setTasks(prevTasks => {
      return [...prevTasks, { text: text, id: crypto.randomUUID(), completed: false }]
    })
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      m: 3
    }}>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Todo List</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {tasks.map((todo) => (
          <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  )
}