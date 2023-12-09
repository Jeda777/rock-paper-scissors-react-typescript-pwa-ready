/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './Header'

describe('Header', () => {
  test('points text working 1', () => {
    const mockSrc = ''
    render(<Header points={10} src={mockSrc} />)
    const text = screen.getByTestId('Points Text')
    expect(text.textContent).toBe('10')
  })
  test('points text working 2', () => {
    const mockSrc = ''
    render(<Header points={176} src={mockSrc} />)
    const text = screen.getByTestId('Points Text')
    expect(text.textContent).toBe('176')
  })
  test('points text working 3', () => {
    const mockSrc = ''
    render(<Header points={876} src={mockSrc} />)
    const text = screen.getByTestId('Points Text')
    expect(text.textContent).toBe('876')
  })
  test('logo game mode classic', () => {
    const mockSrc = './assets/logo.svg'
    render(<Header points={10} src={mockSrc} />)
    const logoImg: HTMLImageElement = screen.getByTestId('Header Logo Img')
    expect(logoImg.src).toContain('logo.svg')
  })
  test('logo game mode modified', () => {
    const mockSrc = './assets/logo-bonus.svg'
    render(<Header points={10} src={mockSrc} />)
    const logoImg: HTMLImageElement = screen.getByTestId('Header Logo Img')
    expect(logoImg.src).toContain('logo-bonus.svg')
  })
})
