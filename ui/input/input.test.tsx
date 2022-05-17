import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './input';

describe('<Input>', () => {
    it('snapshot default state', () => {
        const { container } = render(<Input placeholder='input field' />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot error state', () => {
        const { container } = render(<Input error='Field is not valid' />);

        expect(container).toMatchSnapshot();
    });

    it('should enter a value in input', async () => {
        const INPUT_VALUE = 'Lorem Ipsum is simply dummy text of the printing ';
        const user = userEvent.setup();

        const { getByRole } = render(<Input />);
        const input = getByRole('textbox') as HTMLInputElement;

        await user.type(input, INPUT_VALUE);

        expect(input.value).toBe(INPUT_VALUE);
    })
})