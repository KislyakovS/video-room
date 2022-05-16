import { FC } from 'react';
import clsx from 'clsx';

import OnlineCounterProps from './online-counter.type';

import styles from './online-counter.module.css';

const OnlineCounter: FC<OnlineCounterProps> = ({ className, count, ...props }) => {
    return <div {...props} className={clsx(styles.wrapper, className)}>
        <i className={styles.rec} />
        <span>Online {count}</span>
    </div>
};

export default OnlineCounter;
