import { ChangeEvent } from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MinMaxDropdown } from '@/components/MinMaxDropdown';

describe('MinMaxDropdown Test', () => {
  const labelText = "Stock Price";

  it('renders a label', () => {
    render(<MinMaxDropdown label={labelText} value={50} onChange={() => { }} />);

    const label = screen.getByTestId('label');

    expect(label.textContent).toEqual(labelText);
  })

  it('simulates selection', async () => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      expect(event.target.value).toBe("40");
    }

    render(<MinMaxDropdown label={labelText} value={30} onChange={handleChange} />);

    expect((screen.getByRole('option', { name: '30' }) as HTMLOptionElement).selected).toBe(true)

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '40' }),
    )

    expect(screen.getAllByRole('option').length).toBe(4)
  })
})