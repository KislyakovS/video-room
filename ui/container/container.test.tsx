import { render } from '@testing-library/react';

import Container from './container';

describe('Component Component:', () => {
    it('snapshot', () => {
        const { container } = render(<Container>Container</Container>);

        expect(container).toMatchSnapshot();
    });
})