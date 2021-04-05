import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import styles from '../../styles/Search.module.scss';
import Image from 'next/image';

export const SelfSearch = ({database}) => {
	const [newDB, setNewDB] = useState({
		show: false,
		database,
	});
	const [type, setType] = useState('ALL');

	const onChangehandler = (e) => {
		e.preventDefault();
		if (e.target.value.length && newDB.database) {
			const key = new RegExp(e.target.value);
			setNewDB({
				show: true,
				database: [...database.items.filter((item) => key.test(item.title.toLowerCase()))],
			});
		} else if (!e.target.value.length) {
			setNewDB({
				show: true,
				database: [...database.items],
			});
		}
	};

	const onFocusHandler = (e) => {
		e.preventDefault();
		setNewDB({
			show: true,
			database: [...database.items],
		});
	};

	const onBlurHandler = (e) => {
		e.preventDefault();
		setNewDB({
			show: false,
			database: [...database.items],
		});
	};

	return (
		<div className={styles.selfSearch}>
			<button className={styles.btn_type}>{type}</button>
			<input
				onChange={onChangehandler}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				placeholder='Looking for something?'
			/>
			{newDB.show && newDB.database.length ? (
				<div className={styles.search_menu_list}>
					<ul>
						{newDB.database.map((item, index) => (
							<li className={styles.search_menu_list_item} key={index}>
								<div className={styles.search_menu_list_item_wrapper}>
									<div className={styles.search_menu_list_item_wrapper_img}>
										<Image priority src={item.image} alt={item.title} width={70} height={70} />
									</div>
									<div className={styles.search_menu_list_item_wrapper_info}>
										<h5>{item.title}</h5>
										<span>$ {item.price}</span>
										<div className={styles.label}>
											{item.mealType.title.length && <span>{item.mealType.title}</span>}
											{item.cuisineType.title.length && <span>{item.cuisineType.title}</span>}
											{item.menuType.title.length && <span>{item.menuType.title}</span>}
											{item.courseType.title.length && <span>{item.courseType.title}</span>}
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			) : null}
			<button className={styles.btn_search}>
				<FontAwesomeIcon icon='search' />
			</button>
		</div>
	);
};
