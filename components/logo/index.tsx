import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from './logo.png';

interface LogoProps {
    className?: string;
    href?: string;
    width?: number;
}

const Logo: FC<LogoProps> = ({ className, href, width = 35 }) => {
    const image = <Image
        src={logo}
        width={width}
        height={width * 1.2}
        alt="Orange logo video room"
    />;

    if (href) {
        return <Link href={href}><a className={className}>{image}</a></Link>;
    }

    return <span className={className}>{image}</span>;
};

export default Logo;