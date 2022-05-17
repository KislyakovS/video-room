import { render } from '@testing-library/react';

import Aside from './aside';
import styles from './aside.module.css';

describe('<Aside>', () => {
    it('snapshot', () => {
        const { container } = render(<Aside>Aside</Aside>);

        expect(container).toMatchSnapshot();
    });

    it('should render with the sticky and aside classes', () => {
        const { getByRole } = render(<Aside sticky>Aside</Aside>);
        const aside = getByRole('complementary');
        const hasStickyClass = aside.classList.contains(styles.sticky);
        const hasAsideClass = aside.classList.contains(styles.aside);

        expect(hasStickyClass).toBeTruthy();
        expect(hasAsideClass).toBeTruthy();
    });
})