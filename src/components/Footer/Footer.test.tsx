import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Footer from './Footer';

const currentYear = new Date().getFullYear().toString();

it('should have current year', () => {
  render(<Footer />);
  const message = screen.getByText(
    new RegExp(`CA_4 © ${currentYear} Visos teisės saugomos`, 'i')
  );
  expect(message).toBeVisible();
});
