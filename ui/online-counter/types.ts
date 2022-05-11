import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface OnlineCounterProps extends DefaultProps {
    count: number;
}