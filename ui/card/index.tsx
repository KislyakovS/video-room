import { FC } from 'react';

import styles from './card.module.css';

interface CardProps {
    poster: string;
    title: string;
    duration: string;
}

const Card: FC<CardProps> = ({ poster, title, duration }) => {
    return (
        <article className={styles.wrapper}>
            <div className={styles.poster}>
                <img src={poster} alt={title} />
                <span className={styles.duration}>{duration}</span>
            </div>
            <h3 className={styles.title} title={title}>{title}</h3>
        </article>
    );
};

export default Card;
