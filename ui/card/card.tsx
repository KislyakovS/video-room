import { FC } from 'react';
import clsx from 'clsx';

import CardProps from './card.type';

import styles from './card.module.css';

const Card: FC<CardProps> = ({ className, poster, title, duration, ...props }) => {
    return (
        <article {...props} className={clsx(className, styles.wrapper)}>
            <div className={styles.poster}>
                <img src={poster} alt={`Movie poster - ${title}`} />
                <span className={styles.duration}>{duration}</span>
            </div>
            <h3 className={styles.title} title={title}>{title}</h3>
        </article>
    );
};

export default Card;
