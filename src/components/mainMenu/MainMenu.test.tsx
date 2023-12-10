/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import App from '../../App'

describe('Main Menu', () => {
  describe('Button Classic Game', () => {
    test('button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Button Classic Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      const app = screen.getByTestId('App')
      expect(app.id).toBe('state-1')
    })
    test('button changes state timeout', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      await new Promise((r) => setTimeout(r, 1100))
      const app = screen.getByTestId('App')
      expect(app.id).toBe('state-2')
    })
    test('button changes game mode', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      const app = screen.getByTestId('App')
      expect(!app.classList.contains('modified')).toBe(true)
    })
  })
  describe('Button Modified Game', () => {
    test('button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Button Modified Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      const app = screen.getByTestId('App')
      expect(app.id).toBe('state-1')
    })
    test('button changes state timeout', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      await new Promise((r) => setTimeout(r, 1100))
      const app = screen.getByTestId('App')
      expect(app.id).toBe('state-2')
    })
    test('button changes game mode', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      const app = screen.getByTestId('App')
      expect(app.classList.contains('modified')).toBe(true)
    })
  })
})
