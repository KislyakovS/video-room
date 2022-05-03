import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import Input from '../input';
import ButtonIcon from '../button-icon';

type FormSearchProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

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