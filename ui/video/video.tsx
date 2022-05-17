import { FC } from 'react';

import VideoPropsType from './video.type';

import styles from './video.module.css';

const Video: FC<VideoPropsType> = ({ title, children, ...props }) => {
    return (
        <section {...props}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <video {...props} className={styles.video}>{children}</video>
        </section >
    )
};

export default Video;
