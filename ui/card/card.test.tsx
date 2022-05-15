import { render } from '@testing-library/react';

import Card from './card';

describe('Component Card:', () => {
    it('snapshot', () => {
        const { container } = render(<Card
            poster='http://poster.com'
            title='Зеленая миля'
            duration='189 мин.'
        />);

        expect(container).toMatchSnapshot();
    })
})