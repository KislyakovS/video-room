import { render } from '@testing-library/react';

import Logo from './logo';

describe('<Logo>', () => {
    it('snapshot', () => {
        const { container } = render(<Logo />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot link', () => {
        const { container } = render(<Logo href='/' />);

        expect(container).toMatchSnapshot();
    });
})