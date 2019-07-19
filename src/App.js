import React from 'react'
import {map} from 'ramda'
import Grid from '@material-ui/core/Grid'
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

const App = () => {
  const todoItems = [
    createItem({text: 'buy milk'}),
    createItem({text: 'buy diapers'}),
  ]
  const columns = [
    createColumn({title: 'Todo', items: todoItems}),
    createColumn({title: 'In Progress'}),
    createColumn({title: 'Done'}),
    createColumn({title: 'Blocked'}),
  ]

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch">
      {map(
        ({id, title, items}) => (
          <Column key={id} title={title} items={items} />
        ),
        columns,
      )}
    </Grid>
  )
}

App.displayName = 'App'

export default App
