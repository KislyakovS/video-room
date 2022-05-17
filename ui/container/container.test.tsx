import { render } from '@testing-library/react';

import Container from './container';

describe('<Container>', () => {
    it('snapshot', () => {
        const { container } = render(<Container>Container</Container>);

        expect(container).toMatchSnapshot();
    });
})