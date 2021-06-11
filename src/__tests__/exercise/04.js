// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  let submittedData
  const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)

  // screen.debug() !!!!!!!!!!

  // 🐨 get the username and password fields via `getByLabelText`
  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  const submit = screen.getByRole('button', {name: /submit/i})
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  userEvent.type(username, 'derek')
  userEvent.type(password, '123')
  // 🐨 click on the button with the text "Submit"
  userEvent.click(submit)
  // assert that submittedData is correct
  expect(submittedData).toEqual({username: 'derek', password: '123'})
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
