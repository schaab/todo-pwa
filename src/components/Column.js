import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const NoItemsMessage = () => (
  <ListItem>
    <ListItemText data-testid="no-items-message">
      Add/move items to this column to see them
    </ListItemText>
  </ListItem>
)

const ColumnItem = ({text}) => (
  <ListItem>
    <ListItemText primary={text} data-testid="column-item" />
  </ListItem>
)

ColumnItem.displayName = 'List Item'
ColumnItem.propTypes = {
  text: PropTypes.string,
}

const Column = ({title, items}) => (
  <List>
    <ListSubheader data-testid="column-title">{title}</ListSubheader>
    {items.length === 0 ? (
      <NoItemsMessage />
    ) : (
      items.map(({text}) => <ColumnItem key={text} text={text} />)
    )}
  </List>
)

Column.displayName = 'Column'
Column.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}
Column.defaultProps = {
  title: 'Unknown Column',
  items: [],
}
export default Column
