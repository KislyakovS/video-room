import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default interface AsideProps extends DefaultProps {
    sticky?: boolean;
    children: ReactNode;
}
