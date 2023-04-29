import { useState } from "react";
import styles from "../../src/styles/AboutUs/SeaClubTeam.module.css";
import Image from "next/image";
import ArrowLeft from "../../public/assets/about-us/arrow-left.svg";
import ArrowRight from "../../public/assets/about-us/arrow-right.svg";
import Member from "./Member";
const SeaClubTeam = () => {
	const [teamMembers, setTeamMembers] = useState([
		// This is the Team members state that has been initialized with these objects
		{
			src: "/assets/about-us/gabriel.jpg",
			name: "Jean Gabriel Paquette",
			role: "CO-Founder & COO",
			linkedin_page: "",
			isCooFounder: true,
			isTechTeam: false,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/gaspard.jpg",
			name: "Gaspard Monot",
			role: "CO-Founder & CSO",
			linkedin_page: "",
			isCooFounder: true,
			isTechTeam: false,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/mohamed.jpg",
			name: "Mohamed Dhiaeddine",
			role: "CTO",
			linkedin_page:
				"https://www.linkedin.com/in/messaoudi-mohamed-dhiaeddine-2327b6131/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/jessan.jpg",
			name: "Jessan Khan",
			role: "Project Owner",
			linkedin_page: "https://www.linkedin.com/in/jessankhan/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/shaun.jpg",
			name: "Shaun Wilson",
			role: "Lead Developer",
			linkedin_page: "",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/abul.jpg",
			name: "Abul Basar",
			role: "Frontend and Backend Developer",
			linkedin_page: "https://www.linkedin.com/in/abdulrahim-shiha/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/alpha.jpg",
			name: "Alpha Kabinet Toure",
			role: "Frontend Developer",
			linkedin_page:
				"https://www.linkedin.com/in/alpha-kabinet-tour%C3%A9/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/daniel.jpg",
			name: "Daniel Jean Rodrigues",
			role: "Blockchain Developer",
			linkedin_page: "https://www.linkedin.com/in/danielvasc/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/shittu.jpg",
			name: "Shittu Odunayo Lekan",
			role: "Backend Developer",
			linkedin_page:
				"https://www.linkedin.com/in/shittu-lekan-456a97220/",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/shiha.jpg",
			name: "Abdulrahim Shiha",
			role: "Backend Developer",
			linkedin_page: "",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/hafid.jpg",
			name: "Hafid Saadi",
			role: "Full-Stack Developer",
			linkedin_page: "",
			isCooFounder: false,
			isTechTeam: true,
			isDesignTeam: false,
		},
		{
			src: "/assets/about-us/soley.jpg",
			name: "Soley Flores",
			role: "Lead Designer",
			linkedin_page: "https://www.linkedin.com/in/soleyflores/",
			isCooFounder: false,
			isTechTeam: false,
			isDesignTeam: true,
		},
		{
			src: "/assets/about-us/mythili.jpg",
			name: "Mythili Ravishanka",
			role: "UX Designer",
			linkedin_page: "https://www.linkedin.com/in/mythili-ravishankar/",
			isCooFounder: false,
			isTechTeam: false,
			isDesignTeam: true,
		},
		{
			src: "/assets/about-us/shaun.jpg",
			name: "Yunxin Feng",
			role: "UX Designer",
			linkedin_page: "",
			isCooFounder: false,
			isTechTeam: false,
			isDesignTeam: true,
		},
	]);
	const [activeCurrentSlide, setActiveCurrentSlide] = useState(1); // State used to track the current slide
	const delaySlides = (callback, timer) => {
		setTimeout(callback, timer);
	};
	const slidePrev = () => {
		// function used to slide to the left
		delaySlides(
			() => setActiveCurrentSlide((prevSlide) => prevSlide - 1),
			500
		);
	};
	const slideNext = () => {
		// function used to slide to the right
		delaySlides(() => {
			if (activeCurrentSlide < 3) {
				setActiveCurrentSlide((prevSlide) => prevSlide + 1);
			}
		}, 500);
	};
	return (
		<div className={styles.seaClub_team}>
			{activeCurrentSlide === 1 ? (
				<div className={styles.founders}>
					<div className={styles.title}>
						<h3 className={styles.team_title}>Founding Team </h3>

						<Image // This is the left Icon
							src={ArrowLeft}
							className={styles.icon_behavior}
							width={70}
							height={70}
							alt="Left Arrow Button"
							style={{ opacity: ".5" }}
						/>
						<Image //This is the right Icon
							src={ArrowRight}
							width={70}
							height={70}
							className={styles.icon_behavior}
							onClick={slideNext}
							alt="Right Arrow Button"
						/>
					</div>

					<div className={styles.founders_team}>
						{teamMembers
							.filter((member) => member.isCooFounder)
							.map((member) => (
								<div key={member.name}>
									<Member {...member} />
								</div>
							))}
					</div>
				</div>
			) : activeCurrentSlide === 2 ? (
				<div className={styles.teamMembers}>
					<div className={styles.title}>
						<h3 className={styles.team_title}>Tech Team</h3>
						<Image // This is the left Icon
							src={ArrowLeft}
							className={styles.icon_behavior}
							width={70}
							height={70}
							onClick={slidePrev}
							alt="Left Arrow Button"
						/>
						<Image //This is the right Icon
							src={ArrowRight}
							width={70}
							height={70}
							className={styles.icon_behavior}
							onClick={slideNext}
							alt="Right Arrow Button"
						/>
					</div>
					<div className={styles.team_members}>
						{teamMembers
							.filter((member) => member.isTechTeam)
							.map((member) => (
								<div
									key={member.name}
									className={styles.eachMember}
								>
									<Member {...member} />
								</div>
							))}
					</div>
				</div>
			) : (
				<div className={styles.designerTeam}>
					<div className={styles.title}>
						<h3 className={styles.team_title}>Designer Team</h3>
						<Image // This is the left Icon
							src={ArrowLeft}
							className={styles.icon_behavior}
							width={70}
							height={70}
							onClick={slidePrev}
							alt="Left Arrow Button"
						/>
						<Image //This is the right Icon
							src={ArrowRight}
							width={70}
							height={70}
							className={styles.icon_behavior}
							alt="Right Arrow Button"
							style={{ opacity: ".5" }}
						/>
					</div>
					<div className={styles.designer_team}>
						{teamMembers
							.filter((member) => member.isDesignTeam)
							.map((member) => (
								<div
									key={member.name}
									className={styles.eachMember}
								>
									<Member {...member} />
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};
export default SeaClubTeam;
