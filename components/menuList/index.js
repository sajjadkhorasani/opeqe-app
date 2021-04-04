import React from 'react';
import styles from '../../styles/SelfMenuList.module.scss';
import {SelfMenuListItem} from './item';

export const SelfMenuList = ({title, items}) => {
	return (
		<div className={styles.self_menu_list}>
			<div className={styles.self_menu_list_title}>
				<h4>{title}</h4>
			</div>
			<div className={styles.self_menu_list_items}>
				{items.map((item, index) => (
					<SelfMenuListItem key={index} item={item} />
				))}
			</div>
		</div>
	);
};
