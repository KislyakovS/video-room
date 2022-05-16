import { render } from '@testing-library/react';

import Message from './message';
import { MessageType } from './message.type';

describe('Message Component:', () => {
    it('snapshot type my', () => {
        const { container } = render(<Message
            type={MessageType.my}
            text='Hello!'
            fullDate='2022-11-14 12:20'
            time='12:20'
        />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot type other', () => {
        const { container } = render(<Message
            type={MessageType.other}
            text='Hello!'
            name='Fyodor Dostoevsky'
            fullDate='2022-11-14 12:20'
            time='12:20'
        />);

        expect(container).toMatchSnapshot();
    });

    it('snapshot type service', () => {
        const { container } = render(<Message
            type={MessageType.service}
            text='left the room.'
            name='Fyodor Dostoevsky'
        />);

        expect(container).toMatchSnapshot();
    });
});