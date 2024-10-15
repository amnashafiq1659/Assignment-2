import styles from "./Hero-Section.module.css"

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h2>Hi, I am Amna Shafiq</h2>
      <p>I am passionate about web development, specializing in TypeScript and Next.js.</p>
      <p>
        Check out my work on{' '}
        <a href="https://github.com/amnashafiq1659" target="_blank">
          GitHub
        </a>{' '}
        and connect with me on{' '}
        <a href="https://www.linkedin.com/in/amna-shafiq-0a76b0312/" target="_blank">
          LinkedIn
        </a>.
      </p>
    </div>
  );
}

export default HeroSection;
