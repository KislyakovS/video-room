import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { MessageType } from '@types';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default interface MessageProps extends DefaultProps {
    type: MessageType,
    name?: string;
    text: string;
    fullDate?: string;
    time?: string;
};