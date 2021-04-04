import styles from '../styles/Carousel.module.scss';

export const CarouselTemplate = ({text, active = false}) => {
	return (
		<div className={styles.carousel_template} data-show={active}>
			<div className={styles.carousel_template_title}>
				<h4>Happy Hour</h4>
				<span>{text}</span>
			</div>
			<button>
				Use <b>Happy Hour</b>
			</button>
		</div>
	);
};
