/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import MainMenu from './MainMenu'

describe('Main Menu', () => {
  describe('Button Classic Game', () => {
    test('button exists', () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const button = screen.getByTestId('Button Classic Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      expect(gameStateH).toHaveBeenCalledWith(1)
    })
    test('button changes state timeout', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      await new Promise((r) => setTimeout(r, 1100))
      expect(gameStateH).toHaveBeenCalledWith(2)
    })
    test('button changes game mode', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Classic Game')
      await user.click(button)
      expect(gameModifiedH).toHaveBeenCalledWith(false)
    })
  })
  describe('Button Modified Game', () => {
    test('button exists', () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const button = screen.getByTestId('Button Modified Game')
      expect(button).toBeInTheDocument()
    })
    test('button changes state', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      expect(gameStateH).toHaveBeenCalledWith(1)
    })
    test('button changes state timeout', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      await new Promise((r) => setTimeout(r, 1100))
      expect(gameStateH).toHaveBeenCalledWith(2)
    })
    test('button changes game mode', async () => {
      const gameStateH = jest.fn()
      const gameModifiedH = jest.fn()
      render(<MainMenu setGameState={gameStateH} setIsGameModified={gameModifiedH} />)
      const user = userEvent.setup()
      const button = screen.getByTestId('Button Modified Game')
      await user.click(button)
      expect(gameModifiedH).toHaveBeenCalledWith(true)
    })
  })
})
