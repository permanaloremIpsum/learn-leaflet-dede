import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Halaman Home', () => {
  render(<App />);
  // mencari text tertentu
  const title1 = screen.getByText(/Learn Map/i)
  expect(title1).toBeInTheDocument()

  const title2 = screen.getByText(/Learn Map Control/i)
  expect(title2).toBeInTheDocument()

  const title3 = screen.getByText(/Handle Map with Control Button/i)
  expect(title3).toBeInTheDocument()

  const title4 = screen.getByText(/Map GeoJson/i)
  expect(title4).toBeInTheDocument()
});
