import { Sizes } from '@types';

import { ICONS } from './constants';

export interface IconProps {
    className?: string;
    type: keyof typeof ICONS;
    size?: Sizes,
}