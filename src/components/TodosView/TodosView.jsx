import { useState } from 'react'
import { Button, Box, Collapse, Paper, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material'
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import todos from '../../constants/todos'

export default () => {
  const [open, setOpen] = useState(false);

  return (
  <Paper sx={{ margin: '20px', width: '100%'}}>
    <Box sx={{ display: 'flex'}}>
      <Button onClick={() => setOpen(!open)} sx={{width: '100%'}}>
        {open? <ExpandLess /> : <ExpandMore />}
        <Typography variant="body1" sx={{marginLeft: '15px'}}>Prod Ready Todos List</Typography> 
      </Button>
    </Box>
    <Collapse in={open} timeout="auto">
      <List>
        {todos.map(todo => (
          <ListItem>
          <ListItemButton divider>
            <ListItemText>
              {todo}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Collapse>
  </Paper>
)}