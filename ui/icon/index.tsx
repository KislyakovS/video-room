import { FC } from 'react';
import clsx from 'clsx';

import { Sizes } from '@types';
import { IconProps } from './types';
import { ICONS } from './constants';

import styles from './icon.module.css';

const Icon: FC<IconProps> = ({ className, type, size = Sizes.middle }) => {
    const I = ICONS[type];

    const iconClasses = clsx(className, styles[size]);

    console.log(styles, size);

    return <I className={iconClasses} />
};

export default Icon;