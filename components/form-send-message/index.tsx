import { FC } from 'react';

import { Input, ButtonIcon } from 'ui';

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