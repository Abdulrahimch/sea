import { useState, useEffect } from "react";
import styles from "../../src/styles/AboutUs/Footer.module.css";
const Footer = () => {
	const [isTimeElapsed, setIsTimeElapsed] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTimeElapsed((timeElapsed) => !timeElapsed);
		}, 5000);
		return () => {
			clearInterval(timer);
		};
	}, [isTimeElapsed]); // This function is going to execute each 5 secondes (It has been created to apply the style: text-decoration: line-through)
	return (
		<div className={styles.about_us_footer}>
			<div className={styles.footer_number}>
				<p>/</p>
				<p style={{ marginLeft: "1em" }}>0002</p>
			</div>
			<div className={styles.footer_sections}>
				<div className={styles.footer_section_left}>
					<div className={styles.seaClubGoal}>
						<p>
							Embracing Web3 Technology to Foster Innovative
							Partnerships and Drive Success
						</p>
						<p>Seaclub®</p>
					</div>
				</div>
				<div className={styles.footer_section_right}>
					<span
						className={`${styles.company_word}
                       ${!isTimeElapsed && styles.line_through}
                       `}
					>
						<p>We are a</p>
						<p className={styles.move_company_word_left}>
							Company.
						</p>
					</span>
					<span className={styles.mouvement_word}>
						<p>We are a</p>
						<p className={styles.move_mouvement_word_left}>
							Mouvement.
						</p>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Footer;
