import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { getCssVariable } from 'utils';

import AsideProps from './aside.type';
import { CSS_VARIABL_HEADER_HEIGHT } from './constants';

import styles from './aside.module.css';

const Aside: FC<AsideProps> = ({ className, sticky = false, children }) => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        if (!sticky) {
            return;
        }

        const heightHeader = parseInt(getCssVariable(CSS_VARIABL_HEADER_HEIGHT));

        const onScroll = () => {
            window.scrollY >= heightHeader ? setIsScroll(true) : setIsScroll(false);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [sticky]);

    const asideClasses = clsx(className, styles.aside, {
        [styles.scroll]: isScroll,
        [styles.sticky]: sticky
    });

    return <aside className={asideClasses}>{children}</aside>
};

export default Aside;
