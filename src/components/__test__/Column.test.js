import React from 'react'
import {render} from '@testing-library/react'
import Column from '../Column'

describe('<Column />', () => {
  test('given nothing it should render a default Column', () => {
    const {getByTestId} = render(<Column />)
    const actual = getByTestId('column-title')
    const expected = 'Unknown Column'

    expect(actual).toHaveTextContent(expected)
  })

  test('given no items it should render a message informing the user to add something', () => {
    const {getByTestId} = render(<Column />)
    const actual = getByTestId('no-items-message')
    const expected = 'Add/move items to this column to see them'

    expect(actual).toHaveTextContent(expected)
  })

  test('given a title it should render the title', () => {
    const {getByTestId} = render(<Column title="Horse Apples" />)
    const actual = getByTestId('column-title')
    const expected = 'Horse Apples'

    expect(actual).toHaveTextContent(expected)
  })

  test('given items it should render them in the column', () => {
    const items = [{text: 'do'}, {text: 'the'}, {text: 'thing'}]
    const {getAllByTestId} = render(<Column items={items} />)
    const actual = getAllByTestId('column-item').map(el => el.textContent)

    const expected = ['do', 'the', 'thing']

    expect(actual).toEqual(expected)
  })
})
