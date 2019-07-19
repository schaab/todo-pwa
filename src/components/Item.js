import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import R from 'ramda'

const Item = ({description}) => {
  if (R.isNil(description)) {
    return null
  }

  return (
    <ListItem>
      <ListItemText primary={description} />
      <ListItemSecondaryAction>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
Item.displayName = 'Item'
Item.propTypes = {
  description: PropTypes.string,
}

export default Item
