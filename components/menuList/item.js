import React, {useState} from 'react';
import styles from '../../styles/SelfMenuList.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export const SelfMenuListItem = ({item}) => {
	if (item.special.title && item.special.beginTime.length) {
		const selfTime = item.special.beginTime.replace(/:/g, '');
		const [time, setTime] = useState({
			hours: selfTime.slice(0, 2),
			minutes: selfTime.slice(2, 4),
			seconds: '60',
		});

		const timerChange = () => {
			const selfTime = {
				hours: time.hours,
				minutes: time.minutes,
				seconds: (+time.seconds - 1).toString(),
			};
			if (+selfTime.seconds <= 0) {
				selfTime.seconds = '60';
				selfTime.minutes = (+selfTime.minutes - 1).toString();
			}

			if (+selfTime.minutes <= 0) {
				selfTime.minutes = '60';
				selfTime.hours = (+selfTime.hours - 1).toString();
			}
			setTime(selfTime);
		};

		setTimeout(timerChange, 1000);

		return (
			<div key={item.id} className={styles.self_menu_list_item}>
				<div className={styles.self_menu_list_item_image}>
					<Image priority src={item.image} alt={item.title} layout='fill' />
					<p>
						<FontAwesomeIcon icon={['far', 'clock']} />
						&nbsp;
						{`${time.hours}:${time.minutes}:${time.seconds}`}
					</p>
					<span>{item.special.title}</span>
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
	}

	return (
		<div key={item.id} className={styles.self_menu_list_item}>
			<div className={styles.self_menu_list_item_image}>
				<Image priority src={item.image} alt={item.title} layout='fill' />
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
