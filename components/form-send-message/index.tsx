import { FC } from 'react';

import { Input, ButtonIcon } from 'ui';

import { FormSendMessageProps } from './types';

const FormSendMessage: FC<FormSendMessageProps> = (props) => {
    return (
        <form {...props}>
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