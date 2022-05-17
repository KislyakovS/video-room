import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputPassword from './input-password';

interface MockProps {
    type: string;
}

jest.mock('../icon', () => ({ type }: MockProps) => `Svg Icon - ${type}`);

describe('<InputPassword>', () => {
    it('snapshot', () => {
        const { container } = render(<InputPassword />);

        expect(container).toMatchSnapshot();
    });

    it('should when clicking on the show password button', async () => {
        const user = userEvent.setup();

        const { container } = render(<InputPassword />);
        const input = container.querySelector('input')!;
        const button = container.querySelector('button')!;

        await user.click(button);

        expect(input.type).toBe('text');
    });
});