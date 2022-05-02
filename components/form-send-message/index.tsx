import { FC } from 'react';

import Input from '../input';
import ButtonIcon from '../button-icon';

import styles from './form-send-message.module.css';

const FormSendMessage: FC = () => {
    return (
        <form className={styles.form}>
            <Input className={styles.input} placeholder="Message" />
            <ButtonIcon className={styles.button} type='submit' icon='plane' aria-label='Send message' />
        </form>
    )
};

export default FormSendMessage;