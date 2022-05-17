import { render } from '@testing-library/react';

import OnlineCounter from './online-counter';

describe('<OnlineCounter>', () => {
    it('snapshot', () => {
        const { container } = render(<OnlineCounter count={10} />);

        expect(container).toMatchSnapshot();
    });
});