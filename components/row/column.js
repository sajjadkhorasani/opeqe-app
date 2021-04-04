import React from 'react';
import styles from '../../styles/Row.module.scss';

export const Col = ({children}) => {
	return <div className={styles.col}>{children}</div>;
};
