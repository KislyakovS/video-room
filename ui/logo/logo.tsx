import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LogoProps from './logo.type';

import logo from './logo.png';

const Logo: FC<LogoProps> = ({ className, href, width = 35, height = 42 }) => {
    const image = <Image
        src={logo}
        width={width}
        height={height}
        alt="Orange logo video room"
    />;

    if (href) {
        return <Link href={href}><a className={className}>{image}</a></Link>;
    }

    return <span className={className}>{image}</span>;
};

export default Logo;