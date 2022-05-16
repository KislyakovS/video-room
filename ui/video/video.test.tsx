import { render } from '@testing-library/react';

import Video from './video';

describe('Video Component:', () => {
    it('snapshot', () => {
        const { container } = render(
            <Video title='Зеленая миля' controls>
                <source src="./src-video" type="video/mp4" />
            </Video>
        );

        expect(container).toMatchSnapshot();
    })
});