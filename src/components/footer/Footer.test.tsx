/**
 * @jest-environment jsdom
 */

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import App from '../../App'

describe('Footer', () => {
  describe('Rules Modal', () => {
    test('open button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Rules Button')
      expect(button).toBeInTheDocument()
    })
    test('button opens modal', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Rules Button')
      user.click(button)
      const modal = await screen.findByTestId('Rules Modal')
      expect(modal).toBeInTheDocument()
    })
    test('close button exists', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Rules Button')
      user.click(button)
      const closeButton = await screen.findByTestId('Rules Close Button')
      expect(closeButton).toBeInTheDocument()
    })
    test('button closes modal', async () => {
      render(<App />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Rules Button')
      user.click(button)
      const closeButton = await screen.findByTestId('Rules Close Button')
      const modal = screen.getByTestId('Rules Modal')
      await user.click(closeButton)
      expect(modal).not.toBeInTheDocument()
    })
  })
  describe('Menu Button', () => {
    test('button exists', () => {
      render(<App />)
      const button = screen.getByTestId('Menu Button')
      expect(button).toBeInTheDocument()
    })
  })
})
