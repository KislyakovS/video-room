import { FC } from 'react';

import Input from '../input';
import ButtonIcon from '../button-icon';

const FormSendMessage: FC = () => {
    return (
        <form>
            <Input
                placeholder="Message"
                fullWidth={true}
                endAdornment={
                    <ButtonIcon type='submit' icon='plane' aria-label='Send message' />
                }
            />
        </form>
    )
};

export default FormSendMessage;