import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Input, ButtonIcon } from 'ui';

type FormSendMessageProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

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