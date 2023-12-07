/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('Main Menu', () => {
  describe('Button Classic Game', () => {
    test('button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Button Classic Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      user.click(button)
      expect(app.container.classList.contains('state-1'))
    })
    test('button changes state timeout', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      user.click(button)
      expect(app.container.classList.contains('state-2'))
    })
    test('button changes game mode', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      user.click(button)
      expect(!app.container.classList.contains('modified'))
    })
  })
  describe('Button Modified Game', () => {
    test('button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Button Modified Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      user.click(button)
      expect(app.container.classList.contains('state-1'))
    })
    test('button changes state timeout', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      user.click(button)
      expect(app.container.classList.contains('state-2'))
    })
    test('button changes game mode', () => {
      const app = render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      user.click(button)
      expect(app.container.classList.contains('modified'))
    })
  })
})
