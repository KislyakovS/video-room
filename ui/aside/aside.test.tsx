import { render } from '@testing-library/react';

import Aside from './aside';

describe('<Aside>', () => {
    it('snapshot', () => {
        const { container } = render(<Aside>Aside</Aside>);

        expect(container).toMatchSnapshot();
    });

    it('should have a sticky class', () => {
        const { getByRole } = render(<Aside sticky>Aside</Aside>);
        const aside = getByRole('complementary');

        expect(aside.classList.contains('sticky')).toBeTruthy();
    });
})