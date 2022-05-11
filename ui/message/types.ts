import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export enum MessageType {
    my,
    other,
    service,
}

export interface MessageProps extends DefaultProps {
    type: MessageType,
    name?: string;
    text: string;
    fullDate: string;
    time: string;
};