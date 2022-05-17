import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default interface HeaderProps extends DefaultProps {
    leftSide?: ReactNode,
    center?: ReactNode,
    rightSide?: ReactNode,
};