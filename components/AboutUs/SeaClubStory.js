import styles from "../../src/styles/AboutUs/SeaClubStory.module.css";
import { motion } from "framer-motion";
const SeaClubStory = () => {
	return (
		<div className={styles.story}>
			<div className={styles.title_slash}>
				<span className={styles.story_title}>Our Story</span>
				<span>/</span>
			</div>
				
			<div className={styles.story_content}>
			<div className={styles.story_left_section}>
				<div className={styles.seaclub_story}>
					<div className={styles.seaclub_logo}>
						<motion.div
							className={styles.seaclub_logo_animation}
							initial={{ x: -700 }} // to set an initial state (value) where the global div is going to start
							animate={{ x: 0 }} // final state
							transition={{
								type: "spring",
								delay: 3,
								duration: 4,
								repeat: Infinity,
								repeatType: "loop",
								repeatDelay: 5,
							}} //transition to animate the global div
						>
							<motion.div // This is the small half circle that is going to be animated
								initial={{ rotate: -90, x: -500 }}
								animate={{ x: 100 }}
								transition={{
									type: "spring",
									delay: 3,
									repeat: Infinity,
									duration: 3,
									repeatDelay: 4,
								}}
								className={styles.small_box}
							/>
							<motion.div // This is the middle half circle that is going to be animated
								className={styles.mid_box}
								initial={{ rotate: -90, x: -500 }}
								animate={{ x: 100 }}
								transition={{
									type: "spring",
									delay: 2,
									repeat: Infinity,
									duration: 3,
									repeatDelay: 4,
								}}
							/>
							<motion.div // This is the small full circle that is going to be animated
								className={styles.full_box}
								initial={{ x: -500 }}
								animate={{ x: 100 }}
								transition={{
									type: "spring",
									delay: 1,
									repeat: Infinity,
									duration: 3,
									repeatDelay: 4,
								}}
							/>
						</motion.div>
					</div>
					
				</div>
			</div>
			<div className={styles.story_right_section}>
					<div className={styles.displaySlash} >/</div>
				<div className={styles.seaclub_full_story}>
					<span>
						Anchored in 2022, Seaclub® rides the stormy seas of
						traditional digital service economy. Our platform is
						built on trust, transparency, and collaboration in a
						decentralized environment where clients can locate
						reliable providers, steering clear of scams.
					</span>
					<span>
						We're a community of visionaries working together to
						reinvent the world of service outsourcing.
					</span>
					<span>
						Seaclub® believes that trust and transparency are key to
						success. Set sail with us as we navigate the future of
						work together where trust, fairness, and opportunity
						abound and discover unparalleled collaboration in the
						Web3 space.
					</span>
				</div>
			</div>
			</div>
		</div>
	);
};
export default SeaClubStory;
