import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from '../../styles/Carousel.module.scss';
import {CarouselTemplate} from '../../templates';

export const SelfCarousel = ({template}) => {
	const [activeItem, setActiveItem] = useState(0);

	const timer = setTimeout(() => {
		if (activeItem < template.length - 1) {
			setActiveItem(activeItem + 1);
		} else {
			setActiveItem(0);
		}
	}, 2500);

	const onClickItem = (e, index) => {
		e.preventDefault();
		setActiveItem(index);
		return clearTimeout(timer);
	};

	return (
		<div className={styles.selfCarousel}>
			<div className={styles.template_wrapper}>
				{template.map((item, index) => (
					<CarouselTemplate key={index} text={item} active={index === activeItem} />
				))}
			</div>
			<div className={styles.control_button}>
				{template.map((item, index) => (
					<button key={index} onClick={(e) => onClickItem(e, index)}>
						{activeItem === index ? (
							<FontAwesomeIcon icon={['far', 'dot-circle']} />
						) : (
							<FontAwesomeIcon icon={['far', 'circle']} />
						)}
					</button>
				))}
			</div>
		</div>
	);
};
