import { render, screen } from '@testing-library/react'
import App from './App'

test('Appコンポーネントの描写', () => {
  render(<App />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})
