import { render } from '@testing-library/react';

import OnlineCounter from './online-counter';

describe('OnlineCounter Component:', () => {
    it('snapshot', () => {
        const { container } = render(<OnlineCounter count={10} />);

        expect(container).toMatchSnapshot();
    });
});