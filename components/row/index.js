import React from 'react';
import styles from '../../styles/Row.module.scss';

export const Row = ({children, justify}) => {
	if (justify) {
		return (
			<div className={styles.row} data-justify={justify}>
				{children}
			</div>
		);
	}

	return <div className={styles.row}>{children}</div>;
};
