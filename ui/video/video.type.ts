import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

type DefaultAttributesType = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export default interface VideoPropsType extends DefaultAttributesType {
    title?: string;
}