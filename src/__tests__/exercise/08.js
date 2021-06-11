// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
import {act} from 'react-dom/test-utils'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
function CounterComponent() {
  const {count, increment, decrement} = useCounter()
  return (
    <div>
      <div>current count: {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  render(<CounterComponent />)
  // 🐨 get the elements you need using screen
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const msg = screen.getByText(/current count/i)
  // 🐨 assert on the initial state of the hook
  // screen.debug()
  expect(msg).toHaveTextContent('current count: 0')
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  userEvent.click(increment)
  expect(msg).toHaveTextContent('current count: 1')
  userEvent.click(decrement)
  expect(msg).toHaveTextContent('current count: 0')
})

test('exposes the count and increment/decrement functions better', () => {
  let result
  function TestComponent() {
    result = useCounter()
    return null
  }
  // 🐨 render the component
  render(<TestComponent />)
  // 🐨 get the elements you need using screen
  // console.log(result)
  expect(result.count).toBe(0)

  act(() => {
    result.increment()
  })
  expect(result.count).toBe(1)
  act(() => {
    result.increment()
  })
  expect(result.count).toBe(2)
  act(() => {
    result.decrement()
  })
  expect(result.count).toBe(1)
})

/* eslint no-unused-vars:0 */
