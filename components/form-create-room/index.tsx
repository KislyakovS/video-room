import { useReducer, FC } from 'react';
import clsx from 'clsx';

import { Input, Checkbox, InputPassword, Button } from 'ui';

import { FormCreateRoomProps } from './types';

import styles from './form-create-room.module.css';

const FormCreateRoom: FC<FormCreateRoomProps> = ({ className, ...props }) => {
    const [showInputPassword, toggleShowInputPassword] = useReducer((state) => !state, false);

    return (
        <form {...props} className={clsx(styles.form, className)}>
            <Input placeholder="Name room" className={styles.input} />
            <Input placeholder="Name user" className={styles.input} />
            <Checkbox onChange={toggleShowInputPassword} checked={showInputPassword}>Has password</Checkbox>
            {showInputPassword && <InputPassword placeholder='Password' className={styles.input} />}
            <Button>Create Room</Button>
        </form>
    )
}

export default FormCreateRoom;