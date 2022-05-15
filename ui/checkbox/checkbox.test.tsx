import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './checkbox';

interface MockProps {
    type: string;
}

jest.mock('../icon', () => ({ type }: MockProps) => `Svg Icon - ${type}`);

describe('Component Checkbox:', () => {
    it('snapshot', () => {
        const { container } = render(<Checkbox>Checkbox</Checkbox>);

        expect(container).toMatchSnapshot();
    });

    it('should call for a change on the checkbox', async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        const { getByRole } = render(<Checkbox onChange={onChange}>Checkbox</Checkbox>);
        const checkbox = getByRole('checkbox') as HTMLInputElement;

        await user.click(checkbox);

        expect(onChange).toHaveBeenCalled();
        expect(checkbox.checked).toBeTruthy();
    });
})