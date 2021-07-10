import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

test('renders learn react link', () => {
  render(<AuthorQuiz />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
