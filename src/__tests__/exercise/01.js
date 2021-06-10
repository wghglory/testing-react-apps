// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')

  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.appendChild(div)
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter></Counter>, div)
  // 🐨 get a reference to the increment and decrement buttons:
  const [decreBtn, increBtn] = div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  const msgDiv = div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(msgDiv.textContent).toBe('Current count: 0')
  // 🐨 click the increment button (💰 increment.click())
  increBtn.click()
  // 🐨 assert the message.textContent
  expect(msgDiv.textContent).toBe('Current count: 1')

  // 🐨 click the decrement button (💰 decrement.click())
  decreBtn.click()

  // 🐨 assert the message.textContent
  expect(msgDiv.textContent).toBe('Current count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
