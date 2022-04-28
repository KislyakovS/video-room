import { useState, useCallback, FC } from 'react';
import clsx from 'clsx';

import Input from '../input';
import Checkbox from '../checkbox';
import InputPassword from '../input-password';
import Button from '../button';

import styles from './form-create-room.module.css';

interface FormCreateRoomProps {
    className?: string;
}

const FormCreateRoom: FC<FormCreateRoomProps> = ({ className }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onChangeShowPassword = useCallback(() => {
        setShowPassword(showPassword => !showPassword);
    }, []);

    return (
        <form className={clsx(styles.form, className)}>
            <Input placeholder="Name room" className={styles.input} />
            <Input placeholder="Name user" className={styles.input} />
            <Checkbox onChange={onChangeShowPassword} checked={showPassword}>Has password</Checkbox>
            {showPassword && <InputPassword placeholder='Password' className={styles.input} />}
            <Button>Create Room</Button>
        </form>
    )
}

export default FormCreateRoom;