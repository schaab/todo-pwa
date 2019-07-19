import React, {useState} from 'react'
import {map} from 'ramda'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import uuidv4 from 'uuid/v4'
import Column from './components/Column'

const createColumn = ({
  id = uuidv4(),
  title = 'unamed',
  items = [],
  order = 0,
} = {}) => ({
  id,
  title,
  items,
  order,
})

const createItem = ({id = uuidv4(), text = 'do something'}) => ({
  id,
  text,
})

const todoItems = [
  createItem({text: 'buy milk'}),
  createItem({text: 'buy diapers'}),
]

const App = () => {
  const [todotext, setTodoText] = useState('')
  const [items, setTodoItems] = useState(todoItems)

  const columns = [
    createColumn({title: 'Todo', items}),
    createColumn({title: 'In Progress'}),
    createColumn({title: 'Done'}),
    createColumn({title: 'Blocked'}),
  ]

  const onClickHandler = () => {
    setTodoItems([...todoItems, createItem({text: todotext})])
    setTodoText('')
  }
  return (
    <>
      <TextField
        id="add-todo-input"
        label="Add Todo"
        value={todotext}
        onChange={e => setTodoText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={onClickHandler}>
        Add
      </Button>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        {map(
          ({id, title, i}) => (
            <Column key={id} title={title} items={i} />
          ),
          columns,
        )}
      </Grid>
    </>
  )
}

App.displayName = 'App'

export default App
