import React from 'react';
import styles from '../../styles/SelfMenuList.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export const SelfMenuListItem = ({item}) => {
	const happyHour = item.special.title ? (
		<>
			<p>
				<FontAwesomeIcon icon={['far', 'clock']} />
				&nbsp;
				{item.special.beginTime}
			</p>
			<span>{item.special.title}</span>
		</>
	) : null;

	return (
		<div key={item.id} className={styles.self_menu_list_item}>
			<div className={styles.self_menu_list_item_image}>
				<Image priority src={item.image} alt={item.title} layout='fill' />
				{happyHour}
			</div>
			<h5>{item.title}</h5>
			<span>{item.menuType.title}</span>
			<p>
				{item.cuisineType.title}&nbsp;{item.courseType.title}&nbsp;{item.mealType.title}
			</p>
			<div className={styles.self_menu_list_item_info}>
				<div className={styles.time_remaining_price}>
					<span>
						<FontAwesomeIcon icon='stopwatch' />
						&nbsp;
						{item.preparation}-{item.preparation + 10} Mins
					</span>
					<span>${item.price}</span>
				</div>
				<span>Free Pickup</span>
			</div>
		</div>
	);
};
