import { render } from '@testing-library/react';

import NotFound from './not-found';

describe('NotFound Component:', () => {
    it('snapshot', () => {
        const { container } = render(<NotFound />);

        expect(container).toMatchSnapshot();
    });
})