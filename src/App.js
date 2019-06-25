import React from 'react'
import Grid from '@material-ui/core/Grid'
import Column from './components/Column'
//import R from 'ramda'

/* const createColumn = ({title = 'unamed', items = [], order = 0} = {}) => ({
  title,
  items,
  order,
})
 */
//const sortByOrder = R.sortBy(R.prop('order'))

const App = () => {
  /* const columns = [
    createColumn({title: 'Todo'}),
    createColumn({title: 'In Progress'}),
    createColumn({title: 'Done'}),
    createColumn({title: 'Blocked'}),
  ]
 */
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch">
      <Column />
    </Grid>
  )
}

App.displayName = 'App'

export default App
