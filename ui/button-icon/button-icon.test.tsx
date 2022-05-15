import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonIcon from './button-icon';

interface MockProps {
    type: string;
}

jest.mock('../icon', () => ({ type }: MockProps) => `Svg Icon - ${type}`);

describe('Component ButtonIcon:', () => {
    it('snapshot', () => {
        const { container } = render(<ButtonIcon icon='search' aria-label='Search' />);

        expect(container).toMatchSnapshot();
    });

    it('should call for a click on the button', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        const { getByRole } = render(<ButtonIcon onClick={onClick} icon='search' aria-label='Search' />);
        const button = getByRole('button');

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });
});