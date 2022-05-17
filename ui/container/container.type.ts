import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default interface ContainerProps extends DefaultProps {
    children: ReactNode;
}