import { FC } from 'react';

import { Input, ButtonIcon } from 'ui';

import { FormSearchProps } from './types';

const FormSearch: FC<FormSearchProps> = ({ className, ...props }) => {
    return <form {...props} className={className}>
        <Input
            type='search'
            placeholder='Search...'
            fullWidth={true}
            endAdornment={
                <ButtonIcon type='submit' icon='search' aria-label='Search' />
            }
        />
    </form>
};

export default FormSearch;