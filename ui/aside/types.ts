import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface AsideProps extends DefaultProps {
    sticky?: boolean;
}
