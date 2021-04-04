import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Row, Col, SelfCarousel, SelfMenuList, SelfSearch} from '../components';
import {useEffect, useRef, useState} from 'react';

export default function Home() {
	const [menu, setMenu] = useState(false);
	const [scroll, setScroll] = useState(0);
	const pageRef = useRef(null);
	const [dataBase, setDataBase] = useState(null);

	useEffect(() => {
		fetch('database.json').then((res) => {
			res.json().then((res) => {
				setDataBase(res);
			});
		});
	}, []);

	const scrollReset = (e) => {
		e.preventDefault();
		pageRef.current.scrollTo(0, 0);
	};

	const setScrollTop = (e) => {
		setScroll(pageRef.current.scrollTop);
	};

	return (
		<div ref={pageRef} className={styles.container} onScroll={setScrollTop}>
			<Head>
				<title>Opeqe Inc. | Opeqe San Francisco</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
			</Head>

			<button className={styles.reset_scroll} onClick={scrollReset} disabled={scroll < 500}>
				<FontAwesomeIcon icon='arrow-up' size='1x' />
			</button>

			<header className={styles.main_head} data-change={scroll > 100}>
				<nav className={styles.header_wrapper}>
					<div className={styles.header_left}>
						<Link href='/' passHref>
							<a>
								<Image src='/opeqe-logo.svg' alt='Opeqe Inc' width='170px' height='50px' />
							</a>
						</Link>
					</div>
					<div className={styles.header_right_wrapper} data-show={menu}>
						<div className={styles.header_right}>
							<Link href='https://demo.opeqe.com/order-history' passHref>
								<a className={styles.hoverable}>Orders</a>
							</Link>
							<Link href='https://demo.opeqe.com/locations' passHref>
								<a className={styles.hoverable}>Locations</a>
							</Link>
							<Link href='https://demo.opeqe.com/login' passHref>
								<a className={styles.btn_outline}>Log In</a>
							</Link>
							<Link href='https://demo.opeqe.com/login' passHref>
								<a className={styles.btn_outline}>Sign Up</a>
							</Link>
							<Link href='https://demo.opeqe.com/cart' passHref>
								<a>
									<FontAwesomeIcon icon='shopping-bag' size='1x' />
								</a>
							</Link>
						</div>
					</div>
					<button onClick={() => setMenu(!menu)}>
						<FontAwesomeIcon icon='bars' />
					</button>
				</nav>
			</header>

			<main className={styles.main}>
				<div className={styles.page_wrapper}>
					<div className={styles.home_header_background}>
						<SelfCarousel
							template={[
								'Get Unlimited %40 Off on Egg Burger with Trufle Mayo',
								'Get $5 Off When You Order California Chicken Salad',
								'Get %10 Off When You Order Pad Thai',
								'Get $8 Off When You Order Two or more Quarter Dark and Leg',
							]}
						/>
					</div>
					<div className={styles.page}>
						<nav className={styles.page_navbar}>
							<div className={styles.page_navbar_wrapper}>
								<div className={styles.page_navbar_info}>
									<Link href='https://demo.opeqe.com/order-options' passHref>
										<a>
											<h5>ASAP Pickup</h5>
											<span>Opeqe San Francisco - 235 Montgomery Street</span>
										</a>
									</Link>
									<Link href='https://demo.opeqe.com/order-options' passHref>
										<a className={styles.btn_outline}>Change</a>
									</Link>
									<section>
										<h5>Delivery</h5>
										<span>or</span>
										<h5>Pickup</h5>
									</section>
								</div>
								<div className={styles.divider} />
								<div className={styles.search_bar}>
									<SelfSearch database={dataBase} />
								</div>
							</div>
						</nav>
						<Col>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Happy Hour'
										items={dataBase.items.filter(
											(item) =>
												item.id === '00ee0094-39ce-4d25-67ed-08d687252175' ||
												item.id === '8657273f-bb10-453a-67ee-08d687252175'
										)}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Lunch & Dinner'
										items={dataBase.items.filter(
											(item) => item.mealType.title === 'Lunch & Dinner'
										)}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Mexician'
										items={dataBase.items.filter((item) => item.cuisineType.title === 'Mexican')}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Japanese'
										items={dataBase.items.filter((item) => item.cuisineType.title === 'Japanese')}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Pizza'
										items={dataBase.items.filter((item) => item.menuType.title === 'Pizza')}
									/>
								)}
							</Row>
						</Col>
						<Col>
							<Row justify='center'>
								<div>
									<Image
										src='/ios-mobile-app-promotion.jpg'
										layout='fixed'
										width={160}
										height={320}
									/>
								</div>
								<div className={styles.cross_platform}>
									<span>Cross Platform</span>
									<span>
										native <b>Mobile Application</b>
									</span>
									<span>
										<b>Android</b>,<b>iOS</b>
									</span>
									<Link href='/' passHref>
										<a>
											<Image src='/opeqe-logo.svg' alt='Opeqe Inc' width={170} height={50} />
										</a>
									</Link>
									<span>
										<b>Hybrid Design </b>
										Mobile first
									</span>
									<span>
										<b>Installable </b>
										Web Application
									</span>
									<span>For Any Size Restaurant</span>
									<div>
										<input placeholder='e.g. +18774667373' />
										<button>
											Text Me
											<p>&nbsp; demo App </p>
										</button>
									</div>
								</div>
								<div>
									<Image
										src='/android-mobile-app-promotion.jpg'
										layout='fixed'
										width={160}
										height={320}
									/>
								</div>
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Sandwich'
										items={dataBase.items.filter((item) => item.menuType.title === 'Sandwich')}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Breakfast'
										items={dataBase.items.filter((item) => item.mealType.title === 'Breakfast')}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Salad'
										items={dataBase.items.filter((item) => item.menuType.title === 'Salad')}
									/>
								)}
							</Row>
							<Row>
								{dataBase && (
									<SelfMenuList
										title='Soup'
										items={dataBase.items.filter((item) => item.menuType.title === 'Soup')}
									/>
								)}
							</Row>
						</Col>
						<Col>
							<Row justify='space-around'>
								<Image src='/gift-card-promotion.jpg' layout='fixed' width={410} height={230} />
								<div className={styles.description}>
									<span>
										Branded <b>Gift Card</b>
									</span>
									<Link href='/' passHref>
										<a>
											<Image src='/opeqe-logo.svg' alt='Opeqe Inc' width={170} height={50} />
										</a>
									</Link>
									<p>
										Opeqe provides a wide range of customizable products for reward and incentive
										programs that can meet your restaurant’s goals.
										<br />
										Whether you are looking to drive the addition of new customers, increase the
										loyalty of existing ones we have a customized solution for you.
									</p>
									<div>
										<button>GET ONLINE QUOTE</button>
									</div>
								</div>
							</Row>
						</Col>
						<Col>
							<Row>
								<div className={styles.last_info_description}>
									<h2>Ready to order?</h2>
									<h3>Browse our menu for dine-in, delivery or pickup and catering</h3>
									<div className={styles.page_navbar_info}>
										<Link href='https://demo.opeqe.com/order-options' passHref>
											<a>
												<h5>ASAP Pickup</h5>
												<span>Opeqe San Francisco - 235 Montgomery Street</span>
											</a>
										</Link>
										<Link href='https://demo.opeqe.com/order-options' passHref>
											<a className={styles.btn_outline}>Change</a>
										</Link>
										<section>
											<h5>Delivery</h5>
											<span>or</span>
											<h5>Pickup</h5>
										</section>
									</div>
								</div>
							</Row>
						</Col>
					</div>
				</div>
			</main>

			<footer className={styles.main_footer}>
				<div className={styles.footer_wrapper}>
					<div className={styles.image_top_wrapper}>
						<Image src='/footerTop.svg' alt='footerTop' width='100%' height='100%' />
					</div>
					<div className={styles.links}>
						<Link href='/' passHref>
							<a>About</a>
						</Link>
						<Link href='/' passHref>
							<a>Services</a>
						</Link>
						<Link href='/' passHref>
							<a>Support</a>
						</Link>
						<Link href='/' passHref>
							<a>Gallery</a>
						</Link>
						<Link href='/' passHref>
							<a>Terms</a>
						</Link>
						<Link href='/' passHref>
							<a>Locations</a>
						</Link>
					</div>
					<div className={styles.other_links}>
						<div className={styles.self_link}>
							<h5>Main Menu</h5>
							<Link href='/' passHref>
								<a>Pickup</a>
							</Link>
							<Link href='/' passHref>
								<a>Delivery</a>
							</Link>
						</div>
						<div className={styles.self_link}>
							<h5>Orders</h5>
							<Link href='https://demo.opeqe.com/order-history' passHref>
								<a>Upcoming Orders</a>
							</Link>
							<Link href='https://demo.opeqe.com/location/order-history/recent' passHref>
								<a>Recent Orders</a>
							</Link>
						</div>
						<div className={styles.self_link}>
							<h5>Profile</h5>
							<Link href='https://demo.opeqe.com/profile/promo' passHref>
								<a>Promos & Credits</a>
							</Link>
							<Link href='https://demo.opeqe.com/profile/promo' passHref>
								<a>Rewards</a>
							</Link>
						</div>
						<div className={styles.self_link}>
							<h5>Support</h5>
							<Link href='https://demo.opeqe.com/locations/opeqe-san-francisco' passHref>
								<a>Contact Us</a>
							</Link>
							<Link href='/' passHref>
								<a>Live Chat</a>
							</Link>
						</div>
						<div className={styles.self_link}>
							<h5>Special Offers</h5>
							<Link
								href='https://demo.opeqe.com/location/opeqe-san-francisco/menu/american/lunch-&-dinner/main-course/egg-burger-with-truffle-mayo'
								passHref>
								<a>Happy Hour (Egg Burger with Truffle Mayo)</a>
							</Link>
							<Link
								href='https://demo.opeqe.com/location/opeqe-san-francisco/menu/american/lunch-&-dinner/main-course/california-chicken-salad'
								passHref>
								<a>Happy Hour (California Chicken Salad)</a>
							</Link>
							<Link
								href='https://demo.opeqe.com/location/opeqe-san-francisco/menu/japanese/lunch-&-dinner/main-course/pad-thai'
								passHref>
								<a>Happy Hour (Pad Thai)</a>
							</Link>
							<Link
								href='https://demo.opeqe.com/location/opeqe-san-francisco/menu/american/lunch-&-dinner/main-course/quarter-dark-and-leg'
								passHref>
								<a>Happy Hour (Quarter Dark and Leg)</a>
							</Link>
						</div>
					</div>
					<div className={styles.footer_description}>
						<h5>
							Delight customers everywhere with a branded custom-built native iOS, native Android
							and Installable Website Application.
						</h5>
						<p>
							Opeqe is reliable, fast and commission free all-in-one ordering solutions for
							multi-location or single location restaurants.
						</p>
					</div>
					<div className={styles.social_media}>
						<div className={styles.copyright}>
							<h5>©2019 OPEQE INC</h5>
							{'|'}
							<Link href='https://demo.opeqe.com/termsAndConditions' passHref>
								<a>Terms & Conditions</a>
							</Link>
							{'|'}
							<Link href='https://demo.opeqe.com/privacyPolicy' passHref>
								<a>Privacy Policy</a>
							</Link>
						</div>
						<div className={styles.social_media_link}>
							<Link href='https://instagram.com/opeqeinc/' passHref>
								<a>
									<FontAwesomeIcon icon={['fab', 'instagram']} />
								</a>
							</Link>
							<Link href='https://twitter.com/opeqeinc' passHref>
								<a>
									<FontAwesomeIcon icon={['fab', 'twitter']} />
								</a>
							</Link>
							<Link href='https://facebook.com/opeqe' passHref>
								<a>
									<FontAwesomeIcon icon={['fab', 'facebook']} />
								</a>
							</Link>
							<Link href='https://youtube.com/opeqe' passHref>
								<a>
									<FontAwesomeIcon icon={['fab', 'youtube']} />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
