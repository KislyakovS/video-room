import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';

describe('Component Button:', () => {
    it('snapshot', () => {
        const { container } = render(<Button>Button</Button>);

        expect(container).toMatchSnapshot();
    });

    it('should call for a click on the button', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        const { getByRole } = render(<Button onClick={onClick}>Button</Button>);
        const button = getByRole('button');

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });
})