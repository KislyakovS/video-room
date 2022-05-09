import { FC } from 'react';
import clsx from 'clsx';

import styles from './online-counter.module.css';

interface OnlineCounterProps {
    className?: string;
    count: number;
}

const OnlineCounter: FC<OnlineCounterProps> = ({ className, count }) => {
    return <div className={clsx(styles.wrapper, className)}>
        <i className={styles.rec} />
        <span>Online {count}</span>
    </div>
};

export default OnlineCounter;
