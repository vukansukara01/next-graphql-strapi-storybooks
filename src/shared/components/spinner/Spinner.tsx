import React, {FC} from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Spinner.module.scss';


const Spinner: FC = () => {
    return (
        <div data-testid="spinner" className={styles.container}>
            <ClipLoader color="#66defb" />
        </div>
    );
};

export default Spinner;
