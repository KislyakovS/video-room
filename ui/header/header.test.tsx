import { render } from '@testing-library/react';

import Header from './header';

describe('<Header>', () => {
    it('snapshot', () => {
        const { container } = render(<Header
            leftSide='Left Side'
            center='Center'
            rightSide='Right Side'
        />);

        expect(container).toMatchSnapshot();
    });
});