import { FC, ReactNode, DetailedHTMLProps, VideoHTMLAttributes } from 'react';

import styles from './video.module.css';

type DefaultAttributesType = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
interface VideoPropsType extends DefaultAttributesType {
    title?: string;
    children?: ReactNode;
}


const Video: FC<VideoPropsType> = ({ className, title, children, ...props }) => {
    return (
        <section className={className}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <video {...props} className={styles.video}>{children}</video>
        </section>
    )
};

export default Video;
