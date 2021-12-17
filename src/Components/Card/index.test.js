import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('should render title and image', () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter" label="Magicien" picture="/mypicture.png" />
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe('http://localhost/mypicture.png')
    expect(cardTitle.textContent).toBe('Harry Potter')
  })

  test('should add 🌟 around title', () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter" label="Magicien" picture="/mypicture.png" />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('🌟Harry Potter🌟')
  })
})
