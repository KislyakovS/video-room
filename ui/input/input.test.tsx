import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './input';
import styles from './input.module.css';

describe('<Input>', () => {
    it('snapshot', () => {
        const { container } = render(<Input placeholder='input field' />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot error message', () => {
        const { container } = render(<Input error='Field is not valid' />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot right side element', () => {
        const { container } = render(<Input
            endAdornment={<div>Right Side Element</div>}
        />);

        expect(container).toMatchSnapshot();
    });

    it('should render with the input and fullWidth classes', () => {
        const { getByRole } = render(<Input fullWidth />);
        const input = getByRole('textbox');

        const hasInputClass = input.classList.contains(styles.input);
        const hasFullWidthClass = input.classList.contains(styles.fullWidth);

        expect(hasInputClass).toBeTruthy();
        expect(hasFullWidthClass).toBeTruthy();
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