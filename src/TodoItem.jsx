import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={remove}>
          <ClearIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onChange={toggle}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}