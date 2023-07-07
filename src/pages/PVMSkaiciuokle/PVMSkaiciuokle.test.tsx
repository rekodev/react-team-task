import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PVMSkaiciuokle from './PVMSkaiciuokle';

describe('PVMSkaiciuokle', () => {
  it('should correctly calculate PVM and total sum', async () => {
    render(<PVMSkaiciuokle />);

    const sumaBePvmInput = screen.getByLabelText('Suma be PVM');

    // Clear the input before typing into it
    userEvent.clear(sumaBePvmInput);

    userEvent.type(sumaBePvmInput, '100');

    await waitFor(() => {
      const pvmSumaInput = screen.getByLabelText('PVM suma');
      const bendraSumaInput = screen.getByLabelText('Bendra suma (su PVM)');

      expect((pvmSumaInput as HTMLInputElement).value).toBe('21.00'); // 21% of 100
      expect((bendraSumaInput as HTMLInputElement).value).toBe('121.00'); // 100 + 21%
    });
  });

  it('should correctly calculate Suma be PVM and PVM when Bendra suma (su PVM) is changed', async () => {
    render(<PVMSkaiciuokle />);

    // find the input element by its label
    const bendraSumaSuPvmInput = screen.getByLabelText('Bendra suma (su PVM)');

    userEvent.clear(bendraSumaSuPvmInput);

    userEvent.type(bendraSumaSuPvmInput, '121.00');

    // check that the values have been updated
    await waitFor(() => {
      expect(screen.getByLabelText('Suma be PVM')).toHaveValue('100.00'); // 121 / 1.21
      expect(screen.getByLabelText('PVM suma')).toHaveValue('21.00'); // 121 - 100
    });
  });
});
