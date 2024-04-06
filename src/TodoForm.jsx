import TextField from '@mui/material/TextField';
import ListItem from "@mui/material/ListItem";
import Create from "@mui/icons-material/Create"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <ListItem>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <TextField fullWidth id="outlined-basic" label="Task" variant="outlined" value={text} placeholder="e.g. Walk the dog..."
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="create todo"
                  edge="end"
                  type="submit"
                >
                  <Create />
                </IconButton>
              </InputAdornment>

            ),
          }}

        />
      </form>
    </ListItem>

  )
}