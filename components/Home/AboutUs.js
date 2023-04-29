import style from "../../src/styles/Home/AboutUs.module.css";
const AboutUs = () => {
  return (
    // this is about section
    <section className={style.container}>
      <p className={style.title}>WHO WE ARE</p>
      <h2 className={style.text}>
        Redefine your Web3 collaborations at Seaclub®. Our Marketplace unites
        exceptional talents, forward-thinking brands, agencies, and firms for
        unparalleled synergy. Dive into an interconnected world of professionals
        and organizations, collaborating on cutting-edge Web3 projects. Seaclub
        harnesses blockchain and AI to ensure a secure, transparent, and
        efficient work environment.
      </h2>
    </section>
  );
};

export default AboutUs;
