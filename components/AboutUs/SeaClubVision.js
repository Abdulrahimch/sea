import styles from '../../src/styles/AboutUs/SeaClubVision.module.css';
import Image from "next/image";
const SeaClubVision = () => {
	return (
		<div className={styles.seaclub_vision}>
			<h1 className={styles.vision_title} >
				Dive into <br/>the Seaclub® Vision
			</h1>
			<div className={styles.welcome}>
				<div className={styles.welcome_message}>
					<div className={styles.code} >
						<span>/</span>
						<span style={{marginLeft:".5rem"}}>0001</span>
					</div>
					<span className={styles.welcome_message_text}>
						Welcome aboard Seaclub®, where our passion for
						innovation steers the ship of collaboration, navigating
						the tides of change and creating unparalleled
						opportunities for service providers and clients in the
						Web3 sea.
					</span>
				</div>
				<div className={styles.welcome_image}>
					<Image
						src="/assets/about-us/pexels-canva-studio-3153207.jpg"
						width={700}
						height={416}
						alt="welcome_image"
                        className={styles.image}
					/>
				</div>
			</div>
		</div>
	);
};
export default SeaClubVision;
