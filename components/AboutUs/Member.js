import styles from "../../src/styles/AboutUs/Member.module.css";
import Image from "next/image";
const Member = (props) => {
	return (
		// This is a the component that represents the card with all team members (name, role, linkedinProfile)
		<div className={styles.member}>
			<Image
				src={props.src}
				width={250}
				height={300}
				className={styles.profile_img}
				alt="profile_image"
			/>
			<div className={styles.member_info}>
				<span className={styles.member_name}>{props.name} </span>
				<span className={styles.member_role}>{props.role} </span>
			</div>
			<a href={props.linkedin_page} target="_blank">
				<div className={styles.linkedin_logo}>
					<Image
						src="/assets/about-us/linkedin.png"
						width={20}
						height={20}
						alt="linkedin_logo"
					/>
				</div>
			</a>
		</div>
	);
};
export default Member;
