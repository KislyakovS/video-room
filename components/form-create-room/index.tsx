import { useReducer, FC } from 'react';
import clsx from 'clsx';

import { Input, Checkbox, InputPassword, Button } from 'ui';

import styles from './form-create-room.module.css';

interface FormCreateRoomProps {
    className?: string;
}

const FormCreateRoom: FC<FormCreateRoomProps> = ({ className }) => {
    const [showInputPassword, toggleShowInputPassword] = useReducer((state) => !state, false);

    return (
        <form className={clsx(styles.form, className)}>
            <Input placeholder="Name room" className={styles.input} />
            <Input placeholder="Name user" className={styles.input} />
            <Checkbox onChange={toggleShowInputPassword} checked={showInputPassword}>Has password</Checkbox>
            {showInputPassword && <InputPassword placeholder='Password' className={styles.input} />}
            <Button>Create Room</Button>
        </form>
    )
}

export default FormCreateRoom;