import { ChangeEvent } from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RangeDropdown } from '@/components/RangeDropdown';

describe('RangeDropdown Test', () => {
  const labelText = "Stock Price";

  it('renders a label', () => {
    render(<RangeDropdown label={labelText} value={50} midPoint={100} onChange={() => { }} />);

    const label = screen.getByTestId('label');

    expect(label.textContent).toEqual(`${labelText}:`);
  })

  it('simulates selection', async () => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      expect(event.target.value).toBe("60 - 140");
    }

    render(<RangeDropdown label={labelText} value={30} midPoint={100} onChange={handleChange} />);

    expect((screen.getByRole('option', { name: '70 - 130' }) as HTMLOptionElement).selected).toBe(true)

    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '60 - 140' }),
    )

    expect(screen.getAllByRole('option').length).toBe(3)
  })
})