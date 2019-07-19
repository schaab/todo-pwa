import React from 'react'
import {render} from '@testing-library/react'
import Item from '../Item'

describe(`<${Item.displayName} />`, () => {
  test('given nothing it should not render', () => {
    const {container} = render(<Item />)

    expect(container).toBeEmpty()
  })

  test('given an item, it should display the description', () => {
    const expected = 'Item Description'
    const {container} = render(<Item description="Item Description" />)

    expect(container).toHaveTextContent(expected)
  })
})
