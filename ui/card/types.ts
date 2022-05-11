import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface CardProps extends DefaultProps {
    poster: string;
    title: string;
    duration: string;
}