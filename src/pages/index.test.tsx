import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import React from 'react';

jest.mock('recharts', () => {
  const OriginalRechartsModule = jest.requireActual('recharts');
  return {
    ...OriginalRechartsModule,
    // eslint-disable-next-line react/prop-types
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div style={{ width: '100%', height: '100%' }}>{children}</div>,
  };
});

describe('Home Test', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading.textContent).toEqual('Risk & Reward Graph for Options Strategies');
  })
})